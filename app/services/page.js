import { PageHero, Section, Grid, CardLink, CTA } from '@/components/ui';
import { services } from '@/lib/site';
export const metadata = { title: 'Services', description: 'Web, software, AI, mobile, design, cloud, security and marketing services.' };
export default function Services() {
  return (<><PageHero title="Comprehensive Technology Services. Limitless Possibilities." text="Eight service areas, one team." />
    <Section><Grid>{services.map((s) => <CardLink key={s.slug} href={`/services/${s.slug}`} title={s.title} text={s.blurb} />)}</Grid></Section><CTA /></>);
}
