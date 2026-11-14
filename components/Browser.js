'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';

// Searchable, filterable card list for portfolio projects and articles.
export default function Browser({ items, categories, kind }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const shown = useMemo(() => items.filter((i) =>
    (cat === 'All' || i.category === cat) &&
    `${i.title} ${i.summary || i.excerpt} ${(i.tech || []).join(' ')}`.toLowerCase().includes(q.trim().toLowerCase())), [items, q, cat]);
  const base = kind === 'project' ? '/our-work' : '/insights';
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="sr-only" htmlFor="browse-q">Search</label>
        <input id="browse-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="input sm:max-w-xs" />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {['All', ...categories].map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${cat === c ? 'border-cyan bg-cyan/10 text-cyan' : 'border-white/15 text-muted hover:text-white'}`}>{c}</button>
          ))}
        </div>
      </div>
      {shown.length === 0 ? (
        <p className="mt-10 rounded-[20px] border border-white/10 p-8 text-center text-muted">No {kind === 'project' ? 'projects' : 'articles'} match your search or filter.</p>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((i) => (
            <li key={i.slug}>
              <Link href={`${base}/${i.slug}`} className="group block h-full overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow">
                <div className="h-32 bg-gradient-to-br from-deep via-electric to-cyan opacity-80 transition group-hover:opacity-100" aria-hidden />
                <div className="p-6">
                  <p className="font-mono text-xs text-cyan">{i.category}{i.label ? ` · ${i.label}` : ''}{i.date ? ` · ${i.date}` : ''}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{i.title}</h3>
                  <p className="mt-2 text-sm text-muted">{i.summary || i.excerpt}</p>
                  {i.tech && <p className="mt-4 font-mono text-xs text-white/60">{i.tech.join(' · ')}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
