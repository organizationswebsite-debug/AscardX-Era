import { PageHero, Section } from './ui';
export default function Legal({ title, sections }) {
  return (<><PageHero title={title} text="Draft for legal review. Replace bracketed placeholders and obtain legal review before publication." />
    <Section><div className="max-w-3xl space-y-8">{sections.map(([h, p]) => <div key={h}><h2 className="font-display text-xl font-semibold">{h}</h2><p className="mt-2 leading-relaxed text-muted">{p}</p></div>)}</div></Section></>);
}
