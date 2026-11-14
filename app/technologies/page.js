import { PageHero, Section, Tags, CTA } from '@/components/ui';
import { techCategories } from '@/lib/content';
export const metadata = { title: 'Technologies', description: 'The modern technologies we build with.' };
export default function Tech() {
  return (<><PageHero title="Powered by Modern Technology." text="We list only technologies we use or are prepared to support." />
    <Section><div className="grid gap-5 md:grid-cols-2">{techCategories.map(([c, items]) => (<div key={c} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan/50"><h2 className="mb-4 font-display font-semibold">{c}</h2><Tags items={items} /></div>))}</div></Section><CTA /></>);
}
