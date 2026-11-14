import Link from 'next/link';
import { PageHero, Section, Grid } from '@/components/ui';
import { CareerForm } from '@/components/forms';
import { jobs } from '@/lib/content';
export const metadata = { title: 'Careers', description: 'Build the future with AscardX Era.' };
const principles = [['Ownership', 'We take responsibility for outcomes.'], ['Craft', 'We care about the quality of what we ship.'], ['Learning', 'We grow our skills continuously.']];
export default function Careers() {
  return (<><PageHero title="Build the Future With Us." text="We are a technology company that values craft, ownership and continuous learning." />
    <Section title="Working principles"><Grid>{principles.map(([t, d]) => <div key={t} className="rounded-[20px] border border-white/10 p-6"><h3 className="font-display font-semibold text-cyan">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>)}</Grid></Section>
    <Section title="Current opportunities">
      {jobs.length === 0 ? <p className="rounded-[20px] border border-white/10 p-8 text-muted">No current openings. You are welcome to send a general expression of interest below.</p>
        : <ul className="space-y-3">{jobs.map((j) => <li key={j.slug} className="rounded-xl border border-white/10 p-5"><Link href={`/careers#apply`} className="font-display font-semibold">{j.title}</Link><p className="text-sm text-muted">{j.category} · {j.type} · {j.location}</p></li>)}</ul>}
    </Section>
    <Section title="Apply or express interest" id="apply"><CareerForm /></Section></>);
}
