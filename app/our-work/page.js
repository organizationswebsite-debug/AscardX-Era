import { PageHero, Section, CTA } from '@/components/ui';
import Browser from '@/components/Browser';
import { projects, projectCategories } from '@/lib/content';
export const metadata = { title: 'Our Work', description: 'Selected projects from AscardX Era and Moaz Group.' };
export default function Work() {
  return (<><PageHero title="Turning Ideas Into Digital Experiences." text="Projects built by our team. Client case studies will be added when authorized." />
    <Section><Browser items={projects} categories={projectCategories} kind="project" /></Section><CTA /></>);
}
