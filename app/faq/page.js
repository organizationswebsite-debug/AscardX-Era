import { PageHero, Section, CTA } from '@/components/ui';
import FaqBrowser from '@/components/FaqBrowser';
import { faqs, faqCategories } from '@/lib/content';
export const metadata = { title: 'FAQ', description: 'Answers to common questions about working with AscardX Era.' };
export default function FaqPage() { return (<><PageHero title="Frequently Asked Questions" /><Section><FaqBrowser faqs={faqs} categories={faqCategories} /></Section><CTA /></>); }
