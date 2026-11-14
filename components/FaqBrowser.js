'use client';
import { useState } from 'react';
import { Faq } from './ui';

export default function FaqBrowser({ faqs, categories }) {
  const [q, setQ] = useState('');
  const match = faqs.filter(([, a, b]) => `${a} ${b}`.toLowerCase().includes(q.trim().toLowerCase()));
  return (
    <div>
      <label htmlFor="faq-q" className="sr-only">Search FAQs</label>
      <input id="faq-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions…" className="input max-w-md" />
      {match.length === 0 && <p className="mt-8 text-muted">No questions match your search.</p>}
      {categories.map((c) => {
        const rows = match.filter((f) => f[0] === c);
        return rows.length ? <div key={c} className="mt-10"><h2 className="mb-4 font-display text-lg font-semibold text-cyan">{c}</h2><Faq items={rows.map(([, a, b]) => [a, b])} /></div> : null;
      })}
    </div>
  );
}
