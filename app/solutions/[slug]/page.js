import { notFound } from 'next/navigation';
import { PageHero, Section, Checklist, CTA } from '@/components/ui';
import { solutions } from '@/lib/content';
export function generateStaticParams() { return solutions.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }) { const s = solutions.find((x) => x.slug === params.slug); return s ? { title: s.title, description: s.solution } : {}; }
export default function Solution({ params }) {
  const s = solutions.find((x) => x.slug === params.slug); if (!s) notFound();
  return (<>
    <PageHero title={s.title} text={s.solution} />
    <Section title="The problem"><p className="max-w-3xl text-muted">{s.problem}</p></Section>
    <Section title="Main features"><Checklist items={s.features} /></Section>
    <Section title="Who can benefit"><p className="text-muted">{s.who}</p></Section>
    <Section title="Possible integrations"><Checklist items={s.integrations} /></Section>
    <CTA title={`Interested in ${s.title}?`} text="Tell us about your project and we will assess it." />
  </>);
}
