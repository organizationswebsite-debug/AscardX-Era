import Link from 'next/link';
import { Section, Grid, CardLink, Tags } from './ui';
import { whyPoints, solutions, process, projects, techCategories, articles } from '@/lib/content';

export function Why() {
  return (
    <Section title="More Than Technology. A Strategic Technology Partner.">
      <Grid>{whyPoints.map(([t, d]) => (
        <div key={t} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6"><h3 className="font-display font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{d}</p></div>
      ))}</Grid>
    </Section>
  );
}

export function SolutionsPreview() {
  return (
    <Section title="Practical Solutions for Real Business Needs">
      <Grid>{solutions.slice(0, 6).map((s) => <CardLink key={s.slug} href={`/solutions/${s.slug}`} title={s.title} text={s.solution} />)}</Grid>
    </Section>
  );
}

export function Process() {
  return (
    <Section title="From First Idea to Final Impact.">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {process.map(([t, d], i) => (
          <li key={t} className="relative rounded-[20px] border border-white/10 p-6">
            <span className="font-mono text-sm text-cyan">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 font-display text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function FeaturedWork() {
  return (
    <Section title="Selected Work" light>
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/our-work/${p.slug}`} className="group overflow-hidden rounded-[20px] border border-slate/10 bg-white transition hover:-translate-y-1 hover:border-electric">
            <div className="h-36 bg-gradient-to-br from-deep via-electric to-cyan opacity-90 transition group-hover:opacity-100" aria-hidden />
            <div className="p-6">
              <p className="font-mono text-xs text-electric">{p.category}</p>
              <h3 className="mt-2 font-display font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate/70">{p.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-electric">View case study</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function TechStack() {
  return (
    <Section title="Technologies We Work With">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.slice(0, 6).map(([c, items]) => (<div key={c}><h3 className="mb-3 font-display text-sm font-semibold">{c}</h3><Tags items={items} /></div>))}
      </div>
      <Link href="/technologies" className="btn btn-ghost mt-8">See all technologies</Link>
    </Section>
  );
}

export function InsightsPreview() {
  return (
    <Section title="Insights for a Smarter Digital Future.">
      <Grid>{articles.map((a) => <CardLink key={a.slug} href={`/insights/${a.slug}`} meta={`${a.category} · ${a.date}`} title={a.title} text={a.excerpt} />)}</Grid>
    </Section>
  );
}
