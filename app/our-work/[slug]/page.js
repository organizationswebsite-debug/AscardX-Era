import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, Section, Checklist, Tags, CTA } from '@/components/ui';
import { projects } from '@/lib/content';
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }) { const p = projects.find((x) => x.slug === params.slug); return p ? { title: p.title, description: p.summary } : {}; }
export default function Case({ params }) {
  const p = projects.find((x) => x.slug === params.slug); if (!p) notFound();
  const related = projects.filter((x) => x.slug !== p.slug);
  return (<>
    <PageHero title={p.title} text={p.summary}><p className="mt-4 font-mono text-xs text-cyan">{p.category} · {p.label} · {p.type}</p></PageHero>
    <Section title="Challenge"><p className="max-w-3xl text-muted">{p.challenge}</p></Section>
    <Section title="Objectives"><Checklist items={p.objectives} /></Section>
    <Section title="Solution"><p className="max-w-3xl text-muted">{p.solution}</p></Section>
    <Section title="Features"><Checklist items={p.features} /></Section>
    <Section title="Technology stack"><Tags items={p.tech} /></Section>
    <Section title="Screenshots"><p className="rounded-[20px] border border-dashed border-white/20 p-10 text-center text-muted">Screenshots to be added.</p></Section>
    <Section title="Outcome"><p className="max-w-3xl text-muted">No measured results have been published for this project.</p></Section>
    <Section title="Related projects"><ul className="flex flex-wrap gap-3">{related.map((r) => <li key={r.slug}><Link href={`/our-work/${r.slug}`} className="btn btn-ghost">{r.title}</Link></li>)}</ul></Section>
    <CTA />
  </>);
}
