import { PageHero, Section } from '@/components/ui';
import Browser from '@/components/Browser';
import { articles, articleCategories } from '@/lib/content';
export const metadata = { title: 'Insights', description: 'Articles on technology, AI, software and security.' };
export default function Insights() {
  return (<><PageHero title="Insights for a Smarter Digital Future." /><Section><Browser items={articles} categories={articleCategories} kind="article" /></Section></>);
}
