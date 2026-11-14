import { PageHero, Section, Grid, CTA } from '@/components/ui';
import { whyPoints } from '@/lib/content';
export const metadata = { title: 'Why AscardX Era', description: 'Why businesses choose AscardX Era as a technology partner.' };
const method = [['Development methodology', 'Iterative delivery with regular reviews.'], ['Quality assurance', 'Testing before every release, including forms, navigation and responsiveness.'], ['Project management', 'A clear plan, milestones and a single point of contact.'], ['Communication', 'Plain-language updates on an agreed schedule.'], ['Engagement models', 'Fixed-scope projects or ongoing support, agreed in the proposal.']];
export default function Why() {
  return (<>
    <PageHero title="Why Businesses Choose AscardX Era." text="Business-first thinking, modern engineering and honest communication." />
    <Section title="What You Can Expect"><Grid>{[...whyPoints, ['User-centered design', 'Interfaces shaped around how people actually use them.'], ['Transparent communication', 'No jargon, no surprises on scope or cost.']].map(([t, d]) => <div key={t} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6"><h3 className="font-display font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>)}</Grid></Section>
    <Section title="How We Work"><Grid>{method.map(([t, d]) => <div key={t} className="rounded-[20px] border border-white/10 p-6"><h3 className="font-display font-semibold text-cyan">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>)}</Grid></Section>
    <CTA />
  </>);
}
