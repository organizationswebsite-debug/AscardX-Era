import { PageHero, Section, Grid, CardLink, CTA } from '@/components/ui';
import { solutions } from '@/lib/content';
export const metadata = { title: 'Solutions', description: 'Practical digital solutions for real business challenges.' };
export default function Solutions() {
  return (<><PageHero title="Practical Digital Solutions for Real Business Challenges." />
    <Section><Grid>{solutions.map((s) => <CardLink key={s.slug} href={`/solutions/${s.slug}`} title={s.title} text={s.problem} />)}</Grid></Section><CTA /></>);
}
