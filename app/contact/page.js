import { PageHero, Section } from '@/components/ui';
import { ContactForm } from '@/components/forms';
import { brand } from '@/lib/site';
export const metadata = { title: 'Contact Us', description: 'Start a conversation with AscardX Era.' };
export default function Contact() {
  const c = brand.contact;
  const rows = [['Email', c.email && <a href={`mailto:${c.email}`}>{c.email}</a>], ['Phone', c.phone], ['Office', c.address], ['WhatsApp', c.whatsapp && <a href={c.whatsapp}>Message on WhatsApp</a>], ['LinkedIn', c.linkedin && <a href={c.linkedin}>AscardX Era on LinkedIn</a>]];
  return (<><PageHero title="Let’s Start a Conversation." text="Tell us about your project and we will reply by email." />
    <Section><div className="grid gap-12 lg:grid-cols-[1fr_320px]"><ContactForm />
      <aside><h2 className="font-display font-semibold">Other ways to reach us</h2><dl className="mt-4 space-y-3 text-sm">{rows.map(([k, v]) => <div key={k}><dt className="text-muted">{k}</dt><dd className={v ? 'text-cyan' : 'text-white/50'}>{v || 'To be added'}</dd></div>)}</dl></aside></div></Section></>);
}
