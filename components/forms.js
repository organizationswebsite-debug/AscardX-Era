'use client';
import { useState } from 'react';
import { budgets, timelines, quoteServices, jobs } from '@/lib/content';

function useSubmit(endpoint) {
  const [state, setState] = useState({ status: 'idle', error: '' });
  async function send(body, isForm) {
    setState({ status: 'loading', error: '' });
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: isForm ? undefined : { 'Content-Type': 'application/json' }, body: isForm ? body : JSON.stringify(body) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setState({ status: 'success', error: '' }); return true;
    } catch (e) { setState({ status: 'error', error: e.message }); return false; }
  }
  return [state, send];
}

function Field({ label, name, required, children, ...rest }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-white/80">{label}{required && <span className="text-cyan"> *</span>}</label>
      {children || <input id={name} name={name} required={required} className="input" {...rest} />}
    </div>
  );
}
const Honeypot = () => <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>;
const Consent = () => (
  <label className="flex items-start gap-3 text-sm text-muted"><input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-cyan" />
    <span>I agree that AscardX Era may use my details to respond to this request, as described in the <a href="/privacy-policy" className="text-cyan underline">Privacy Policy</a>.</span></label>
);
function Status({ s }) {
  if (s.status === 'error') return <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">{s.error}</p>;
  return null;
}
const Success = ({ text }) => <div role="status" className="rounded-[20px] border border-cyan/40 bg-cyan/10 p-8"><h2 className="font-display text-2xl font-semibold">Thank you.</h2><p className="mt-2 text-muted">{text}</p></div>;

function simple(endpoint, successText, isCareer) {
  return function SimpleForm({ children }) {
    const [s, send] = useSubmit(endpoint);
    if (s.status === 'success') return <Success text={successText} />;
    async function onSubmit(e) {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      if (isCareer) { fd.set('consent', e.currentTarget.consent.checked ? 'true' : ''); await send(fd, true); }
      else { const o = Object.fromEntries(fd.entries()); o.consent = e.currentTarget.consent.checked; await send(o, false); }
    }
    return (
      <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
        <Honeypot />{children}
        <div className="grid gap-4 sm:col-span-2"><Consent /><Status s={s} />
          <button type="submit" disabled={s.status === 'loading'} className="btn btn-primary w-full sm:w-fit disabled:opacity-60">{s.status === 'loading' ? 'Sending…' : 'Send'}</button></div>
      </form>
    );
  };
}

const ContactShell = simple('/api/contact', 'Your message has been received. We will reply by email.');
export function ContactForm() {
  return (<ContactShell>
    <Field label="Full name" name="name" required autoComplete="name" />
    <Field label="Business email" name="email" type="email" required autoComplete="email" />
    <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
    <Field label="Company name" name="company" autoComplete="organization" />
    <Field label="Subject" name="subject" required />
    <Field label="Service interested in" name="service"><select id="service" name="service" className="input"><option value="">Select…</option>{quoteServices.map((o) => <option key={o}>{o}</option>)}</select></Field>
    <Field label="Project budget range (optional)" name="budget"><select id="budget" name="budget" className="input"><option value="">Select…</option>{budgets.map((o) => <option key={o}>{o}</option>)}</select></Field>
    <div className="sm:col-span-2"><Field label="Project details" name="message" required><textarea id="message" name="message" required rows={5} className="input" /></Field></div>
  </ContactShell>);
}

const CareerShell = simple('/api/careers', 'Your application has been received. We will be in touch if there is a match.', true);
export function CareerForm() {
  return (<CareerShell>
    <Field label="Full name" name="name" required autoComplete="name" />
    <Field label="Email" name="email" type="email" required autoComplete="email" />
    <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
    <Field label="Position" name="position" required placeholder={jobs.length ? '' : 'General expression of interest'} defaultValue={jobs.length ? '' : 'General expression of interest'} />
    <Field label="Experience" name="experience" placeholder="e.g. 3 years full-stack" />
    <Field label="Portfolio or LinkedIn URL" name="link" type="url" />
    <div className="sm:col-span-2"><Field label="CV (PDF or Word, max 5 MB)" name="cv"><input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="input" /></Field></div>
    <div className="sm:col-span-2"><Field label="Message" name="message" required><textarea id="message" name="message" required rows={5} className="input" /></Field></div>
  </CareerShell>);
}

const steps = ['Service', 'Project', 'Budget', 'Timeline', 'Contact', 'Review'];
export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ service: '', details: '', budget: '', timeline: '', name: '', email: '', phone: '', company: '', consent: false, website: '' });
  const [err, setErr] = useState('');
  const [s, send] = useSubmit('/api/quote');
  const set = (k) => (e) => setD({ ...d, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  if (s.status === 'success') return <Success text="Your request has been received. We will assess it and reply by email with next steps. Quotes are prepared manually, so this is not an instant quotation." />;

  function validate() {
    if (step === 0 && !d.service) return 'Please choose a service.';
    if (step === 1 && d.details.trim().length < 10) return 'Please describe your project (at least 10 characters).';
    if (step === 4 && (!d.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email))) return 'Please enter your name and a valid email.';
    if (step === 5 && !d.consent) return 'Please accept the privacy consent.';
    return '';
  }
  const next = () => { const m = validate(); setErr(m); if (!m) setStep(step + 1); };
  const submit = async () => { const m = validate(); setErr(m); if (!m) await send(d, false); };
  const radio = (k, opts) => (<fieldset className="grid gap-3 sm:grid-cols-2"><legend className="sr-only">{k}</legend>{opts.map((o) => (
    <label key={o} className={`cursor-pointer rounded-xl border p-4 text-sm transition ${d[k] === o ? 'border-cyan bg-cyan/10' : 'border-white/15 hover:border-white/40'}`}>
      <input type="radio" name={k} value={o} checked={d[k] === o} onChange={set(k)} className="sr-only" />{o}</label>))}</fieldset>);

  return (
    <div className="max-w-2xl">
      <div className="mb-8" aria-label={`Step ${step + 1} of ${steps.length}: ${steps[step]}`}>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan transition-all duration-500" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
        <p className="mt-2 font-mono text-xs text-cyan">Step {step + 1} of {steps.length} · {steps[step]}</p>
      </div>
      <div className="min-h-[220px]">
        {step === 0 && <><h2 className="mb-4 font-display text-xl font-semibold">What do you need?</h2>{radio('service', quoteServices)}</>}
        {step === 1 && <><h2 className="mb-4 font-display text-xl font-semibold">Describe your project</h2><label htmlFor="details" className="sr-only">Project details</label><textarea id="details" rows={6} value={d.details} onChange={set('details')} className="input" placeholder="Goals, features, who it is for…" /></>}
        {step === 2 && <><h2 className="mb-4 font-display text-xl font-semibold">Estimated budget (optional)</h2>{radio('budget', budgets)}</>}
        {step === 3 && <><h2 className="mb-4 font-display text-xl font-semibold">Expected timeline (optional)</h2>{radio('timeline', timelines)}</>}
        {step === 4 && <div className="grid gap-4 sm:grid-cols-2"><div className="sm:col-span-2"><h2 className="font-display text-xl font-semibold">Your contact details</h2></div>
          <Field label="Full name" name="name" required value={d.name} onChange={set('name')} /><Field label="Email" name="email" type="email" required value={d.email} onChange={set('email')} />
          <Field label="Phone (optional)" name="phone" type="tel" value={d.phone} onChange={set('phone')} /><Field label="Company (optional)" name="company" value={d.company} onChange={set('company')} /></div>}
        {step === 5 && <div className="space-y-4"><h2 className="font-display text-xl font-semibold">Review and submit</h2>
          <dl className="divide-y divide-white/10 rounded-xl border border-white/10 text-sm">{[['Service', d.service], ['Project', d.details], ['Budget', d.budget || 'Not specified'], ['Timeline', d.timeline || 'Not specified'], ['Name', d.name], ['Email', d.email], ['Phone', d.phone || '—'], ['Company', d.company || '—']].map(([k, v]) => <div key={k} className="grid gap-1 p-3 sm:grid-cols-[110px_1fr]"><dt className="text-muted">{k}</dt><dd className="break-words">{v}</dd></div>)}</dl>
          <div className="hidden" aria-hidden="true"><input tabIndex={-1} autoComplete="off" value={d.website} onChange={set('website')} /></div>
          <label className="flex items-start gap-3 text-sm text-muted"><input type="checkbox" checked={d.consent} onChange={set('consent')} className="mt-1 h-4 w-4 accent-cyan" /><span>I agree that AscardX Era may use my details to respond to this request (<a href="/privacy-policy" className="text-cyan underline">Privacy Policy</a>).</span></label></div>}
      </div>
      {(err || s.status === 'error') && <p role="alert" className="mt-4 rounded-xl border border-red-400/40 bg-red-400/10 p-3 text-sm text-red-200">{err || s.error}</p>}
      <div className="mt-8 flex gap-3">
        {step > 0 && <button type="button" className="btn btn-ghost" onClick={() => { setErr(''); setStep(step - 1); }}>Previous</button>}
        {step < 5 ? <button type="button" className="btn btn-primary" onClick={next}>Next</button>
          : <button type="button" className="btn btn-primary disabled:opacity-60" disabled={s.status === 'loading'} onClick={submit}>{s.status === 'loading' ? 'Submitting…' : 'Submit request'}</button>}
      </div>
    </div>
  );
}
