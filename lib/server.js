import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

const hits = new Map();
function limited(ip) { // 5 submissions per 10 minutes per IP (in-memory; use Redis/Upstash for multi-instance hosting)
  const now = Date.now(); const list = (hits.get(ip) || []).filter((t) => now - t < 600000);
  list.push(now); hits.set(ip, list); return list.length > 5;
}
const clean = (v, max = 5000) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
const emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

const rules = {
  contact: { required: ['name', 'email', 'subject', 'message'], fields: ['name', 'email', 'phone', 'company', 'subject', 'service', 'budget', 'message'] },
  quote: { required: ['service', 'details', 'name', 'email'], fields: ['service', 'details', 'budget', 'timeline', 'name', 'email', 'phone', 'company'] },
  careers: { required: ['name', 'email', 'position', 'message'], fields: ['name', 'email', 'phone', 'position', 'experience', 'link', 'message'] },
};

async function store(kind, record) {
  const dir = path.join(process.cwd(), 'data', 'submissions');
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(path.join(dir, `${kind}.jsonl`), JSON.stringify(record) + '\n');
}

async function mail(kind, record, attachments) {
  if (!process.env.SMTP_HOST) return false;
  const t = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === 'true', auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } });
  const text = Object.entries(record).map(([k, v]) => `${k}: ${v}`).join('\n');
  await t.sendMail({ from: process.env.MAIL_FROM || process.env.SMTP_USER, to: process.env.MAIL_TO, replyTo: record.email, subject: `[AscardX Era] New ${kind} submission`, text, attachments });
  return true;
}

export async function handle(req, kind) {
  try {
    const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
    if (limited(ip)) return Response.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });

    const ctype = req.headers.get('content-type') || '';
    let raw = {}; let file = null;
    if (ctype.includes('multipart/form-data')) { const fd = await req.formData(); fd.forEach((v, k) => { if (typeof v === 'string') raw[k] = v; else if (k === 'cv' && v.size) file = v; }); }
    else raw = await req.json();

    if (raw.website) return Response.json({ ok: true }); // honeypot: silently drop bots
    const { required, fields } = rules[kind];
    const rec = {}; for (const f of fields) rec[f] = clean(raw[f], f === 'details' || f === 'message' ? 5000 : 300);
    const missing = required.filter((f) => !rec[f]);
    if (missing.length) return Response.json({ error: `Please complete: ${missing.join(', ')}.` }, { status: 400 });
    if (!emailOk(rec.email)) return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    if (raw.consent !== true && raw.consent !== 'true') return Response.json({ error: 'Please accept the privacy consent.' }, { status: 400 });

    let attachments = [];
    if (file) {
      const ok = /\.(pdf|doc|docx)$/i.test(file.name) && file.size <= 5 * 1024 * 1024;
      if (!ok) return Response.json({ error: 'CV must be a PDF or Word file under 5 MB.' }, { status: 400 });
      attachments = [{ filename: path.basename(file.name).replace(/[^\w.\-]/g, '_'), content: Buffer.from(await file.arrayBuffer()) }];
      rec.cv = attachments[0].filename;
    }
    rec.receivedAt = new Date().toISOString();

    let saved = false, mailed = false;
    try { await store(kind, rec); saved = true; } catch (e) { console.error('store failed', e.message); }
    try { mailed = await mail(kind, rec, attachments); } catch (e) { console.error('mail failed', e.message); }
    if (!saved && !mailed) return Response.json({ error: 'We could not record your message. Please email us directly.' }, { status: 500 });
    return Response.json({ ok: true });
  } catch (e) {
    console.error(e); return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
