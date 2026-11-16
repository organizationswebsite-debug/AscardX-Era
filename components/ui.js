import Link from 'next/link';

export function PageHero({ title, text, children }) {
  return (
    <section className="bg-[radial-gradient(ellipse_at_80%_0%,#0B2D59_0%,#071426_65%)] pb-16 pt-36 sm:pt-44">
      <div className="container-x">
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function Section({ title, children, light = false, id }) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${light ? 'bg-mist text-slate' : ''}`}>
      <div className="container-x">
        {title && <h2 className="mb-8 max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function Tags({ items }) {
  return <ul className="flex flex-wrap gap-2">{items.map((t) => <li key={t} className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-cyan">{t}</li>)}</ul>;
}

export function Checklist({ items }) {
  return <ul className="grid gap-3 sm:grid-cols-2">{items.map((t) => <li key={t} className="flex gap-3 text-muted"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{t}</li>)}</ul>;
}

export function CardLink({ href, title, text, meta }) {
  return (
    <Link href={href} className="group block h-full rounded-[20px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow">
      {meta && <p className="mb-3 font-mono text-xs text-cyan">{meta}</p>}
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      {text && <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>}
      <span className="mt-5 inline-block text-sm font-semibold text-cyan group-hover:underline">Learn more</span>
    </Link>
  );
}

export function Grid({ children, cols = 3 }) {
  const c = cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
  return <div className={`grid gap-5 ${c}`}>{children}</div>;
}

export function CTA({ title = 'Have an Idea? Let’s Turn It Into Reality.', text = 'Let’s discuss how technology can help your business move forward.' }) {
  return (
    <section className="container-x py-20">
      <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-deep to-navy p-10 sm:p-14">
        <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight">{title}</h2>
        <p className="mt-4 text-muted">{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/get-a-quote" className="btn btn-primary">Start a Project</Link>
          <Link href="/contact" className="btn btn-ghost">Contact Our Team</Link>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }) {
  return (
    <div className="divide-y divide-white/10 rounded-[20px] border border-white/10">
      {items.map(([q, a]) => (
        <details key={q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">{q}<span aria-hidden className="text-cyan transition group-open:rotate-45">+</span></summary>
          <p className="mt-3 leading-relaxed text-muted">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function ProcessList() {
  return null;
}
