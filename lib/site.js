// Single source of truth for brand info, navigation and services.
// Placeholders (null) are rendered as "to be added" and never as live links.
export const brand = {
  name: 'AscardX Era',
  parent: 'Moaz Group of Companies',
  philosophy: 'Innovation. Intelligence. Impact.',
  url: 'https://ascardxera.com', // TODO: confirm production domain
  contact: { email: null, phone: null, address: null, whatsapp: null, linkedin: null }, // TODO: supply real details
};

export const services = [
  { slug: 'web-development', title: 'Web Development', blurb: 'Business sites, e-commerce and custom web applications built to be fast and easy to maintain.' },
  { slug: 'software-development', title: 'Software Development', blurb: 'Management systems, internal tools and APIs shaped around how your team actually works.' },
  { slug: 'ai-solutions', title: 'AI Solutions', blurb: 'Chatbots, assistants and workflow automation, scoped to realistic, testable outcomes.' },
  { slug: 'mobile-applications', title: 'Mobile Applications', blurb: 'Android, iOS and cross-platform apps for customers and for your own staff.' },
  { slug: 'ui-ux-design', title: 'UI/UX Design', blurb: 'Research, prototypes and design systems that make products easier to use.' },
  { slug: 'cloud-solutions', title: 'Cloud Solutions', blurb: 'Deployment, migration and infrastructure that scales with demand.' },
  { slug: 'cybersecurity', title: 'Cybersecurity', blurb: 'Security assessments and secure-by-design engineering for web and apps.' },
  { slug: 'digital-marketing', title: 'Digital Marketing', blurb: 'SEO, content and paid campaigns with transparent performance reporting.' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}`, blurb: s.blurb })) },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const footerColumns = [
  { title: 'Company', links: [['About Us', '/about'], ['Our Work', '/our-work'], ['Why AscardX Era', '/why-ascardx-era'], ['Careers', '/careers'], ['Insights', '/insights']] },
  { title: 'Services', links: services.map((s) => [s.title, `/services/${s.slug}`]) },
  { title: 'Resources', links: [['FAQs', '/faq'], ['Contact', '/contact'], ['Get a Quote', '/get-a-quote'], ['Privacy Policy', '/privacy-policy'], ['Terms and Conditions', '/terms']] },
];
