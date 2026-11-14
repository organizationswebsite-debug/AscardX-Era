import { PageHero, Section, Grid, CardLink, CTA } from '@/components/ui';
import { industries } from '@/lib/content';
export const metadata = { title: 'Industries', description: 'Technology designed around your industry.' };
export default function Industries() {
  return (<><PageHero title="Technology Designed Around Your Industry." />
    <Section><Grid>{industries.map((s) => <CardLink key={s.slug} href={`/industries/${s.slug}`} title={s.title} text={s.intro} />)}</Grid></Section><CTA /></>);
}
