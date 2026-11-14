import { notFound } from 'next/navigation';
import { PageHero, Section, Checklist, Tags, Faq, CTA } from '@/components/ui';
import { Process } from '@/components/HomeSections';
import { services } from '@/lib/site';
import { serviceDetails, serviceFaqs } from '@/lib/content';

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }) { const s = services.find((x) => x.slug === params.slug); return s ? { title: s.title, description: s.blurb } : {}; }

export default function ServicePage({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const d = serviceDetails[s.slug];
  return (<>
    <PageHero title={s.title} text={s.blurb} />
    <Section title="What we cover"><Checklist items={d.covers} />{d.note && <p className="mt-8 max-w-2xl rounded-xl border border-white/10 p-4 text-sm text-muted">{d.note}</p>}</Section>
    {d.tech.length > 0 && <Section title="Technologies"><Tags items={d.tech} /></Section>}
    <Process />
    <Section title="Frequently asked questions"><Faq items={serviceFaqs} /></Section>
    <CTA />
  </>);
}
