import { notFound } from 'next/navigation';
import { PageHero, Section, Checklist, CTA } from '@/components/ui';
import { industries, industryBenefits } from '@/lib/content';
export function generateStaticParams() { return industries.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }) { const s = industries.find((x) => x.slug === params.slug); return s ? { title: s.title, description: s.intro } : {}; }
export default function Industry({ params }) {
  const s = industries.find((x) => x.slug === params.slug); if (!s) notFound();
  return (<>
    <PageHero title={s.title} text={s.intro} />
    <Section title="Common challenges"><Checklist items={s.challenges} /></Section>
    <Section title="Relevant digital solutions and use cases"><Checklist items={s.solutions} /></Section>
    <Section title="Benefits"><Checklist items={industryBenefits} /></Section>
    <CTA />
  </>);
}
