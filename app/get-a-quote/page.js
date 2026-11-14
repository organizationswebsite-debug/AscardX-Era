import { PageHero, Section } from '@/components/ui';
import { QuoteForm } from '@/components/forms';
export const metadata = { title: 'Get a Quote', description: 'Request a project quote from AscardX Era.' };
export default function Quote() {
  return (<><PageHero title="Let’s Scope Your Project." text="Six short steps. Quotes are prepared by our team after reviewing your requirements, so we cannot promise an instant price." /><Section><QuoteForm /></Section></>);
}
