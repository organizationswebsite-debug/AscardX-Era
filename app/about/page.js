import { PageHero, Section, Grid, CTA } from '@/components/ui';
import { brand } from '@/lib/site';
export const metadata = { title: 'About Us', description: 'The people, vision and thinking behind AscardX Era.' };
const values = [['Innovation', 'We explore better ways to solve real problems.'], ['Excellence', 'We hold our work to a high, consistent standard.'], ['Integrity', 'We are honest about scope, cost and limits.'], ['Customer Success', 'Your outcomes define whether we did well.'], ['Collaboration', 'The best solutions are built with you, not for you.'], ['Security', 'We protect data and access by default.'], ['Continuous Learning', 'We keep improving our skills and tools.']];
const philosophy = [['Innovation', 'Using modern, proven approaches to solve problems in better ways.'], ['Intelligence', 'Thinking before building: understanding the business, the users and the constraints.'], ['Impact', 'Measuring success by the difference a solution makes for your business.']];
export default function About() {
  return (<>
    <PageHero title="Building Tomorrow Through Innovation." text="Discover the people, vision, and technology-driven thinking behind AscardX Era." />
    <Section title="Our Story"><p className="max-w-3xl leading-relaxed text-muted">AscardX Era exists to help businesses use technology in practical ways. We combine strategy, design and engineering to deliver websites, software and digital tools that fit how a business really works. Our ambition is long-term: to grow into a technology company known for quality and reliability.</p></Section>
    <Section title="Who We Are"><p className="max-w-3xl leading-relaxed text-muted">AscardX Era is a forward-thinking technology company delivering digital and software solutions to startups, growing companies and enterprises.</p></Section>
    <Section title="Mission and Vision"><div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-[20px] border border-white/10 p-7"><h3 className="font-display text-xl font-semibold">Our Mission</h3><p className="mt-3 text-muted">To deliver innovative, reliable, and future-ready technology solutions that empower businesses, accelerate digital transformation, and create lasting value through excellence and innovation.</p></div>
      <div className="rounded-[20px] border border-white/10 p-7"><h3 className="font-display text-xl font-semibold">Our Vision</h3><p className="mt-3 text-muted">To become a globally recognized technology company known for innovation, quality, and delivering transformative digital solutions that shape the future.</p></div>
    </div></Section>
    <Section title="Core Values"><Grid>{values.map(([t, d]) => <div key={t} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6"><h3 className="font-display font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>)}</Grid></Section>
    <Section title="Innovation. Intelligence. Impact."><Grid>{philosophy.map(([t, d]) => <div key={t} className="rounded-[20px] border border-white/10 p-6"><h3 className="font-display font-semibold text-cyan">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>)}</Grid></Section>
    <Section title="Our Approach"><p className="max-w-3xl leading-relaxed text-muted">We combine research, strategy, design, engineering and continuous improvement. Each project moves through discovery, planning, design, development, launch and support, with regular check-ins so you always know where things stand.</p></Section>
    <Section title="Parent Organization"><p className="max-w-3xl leading-relaxed text-muted">AscardX Era is part of {brand.parent}, an information technology holding company.</p></Section>
    <CTA title="Let’s Build the Future Together." />
  </>);
}
