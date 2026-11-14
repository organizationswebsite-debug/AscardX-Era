// All editable website content lives here (CMS-ready: swap these exports for a database/CMS later).

export const process = [
  ['Discover', 'Understand business goals and requirements.'],
  ['Strategize', 'Develop a clear technical and project strategy.'],
  ['Design', 'Create intuitive, modern, user-focused experiences.'],
  ['Develop', 'Build secure, scalable, high-quality solutions.'],
  ['Launch', 'Test, deploy, and deliver the solution.'],
  ['Support & Grow', 'Maintain, improve, and scale the product.'],
];

export const whyPoints = [
  ['Innovation-driven approach', 'We look for modern, proven tools that fit the problem rather than chasing trends.'],
  ['Business-focused solutions', 'Every feature is tied to a business goal you can name.'],
  ['Scalable architecture', 'Systems designed to grow from first launch to larger workloads.'],
  ['Quality-focused development', 'Code review, testing and staged releases before anything goes live.'],
  ['Security-conscious engineering', 'Validation, access control and secrets handling built in from the start.'],
  ['Long-term support', 'Maintenance and improvement plans after launch, agreed up front.'],
];

export const serviceDetails = {
  'web-development': { covers: ['Business websites', 'Corporate websites', 'E-commerce websites', 'Landing pages', 'Custom web applications', 'Website redesign', 'Website maintenance', 'Responsive development', 'Performance optimization', 'SEO-friendly development'], tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'] },
  'software-development': { covers: ['Custom software', 'Business management systems', 'CRM systems', 'ERP solutions', 'Inventory management', 'Workflow automation', 'Internal business tools', 'API development', 'Software modernization'], tech: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  'ai-solutions': { covers: ['AI-powered applications', 'AI integrations', 'Intelligent chatbots', 'Workflow automation', 'Data analysis', 'AI assistants', 'Machine learning solutions', 'AI business tools'], tech: ['Python', 'AI APIs', 'Node.js'] },
  'mobile-applications': { covers: ['Android applications', 'iOS applications', 'Cross-platform development', 'Business applications', 'Customer applications', 'App UI/UX', 'API integration', 'App maintenance'], tech: ['Flutter', 'React Native'] },
  'ui-ux-design': { covers: ['User research', 'User journeys', 'Wireframing', 'Prototyping', 'Interface design', 'Design systems', 'Web design', 'Mobile app design', 'Usability improvement'], tech: ['Figma'] },
  'cloud-solutions': { covers: ['Cloud infrastructure', 'Cloud migration', 'Cloud application deployment', 'Storage solutions', 'Infrastructure optimization', 'Scalability', 'Cloud security', 'Backup and recovery'], tech: ['AWS', 'Azure', 'Google Cloud'] },
  cybersecurity: { covers: ['Security assessments', 'Application security', 'Website security', 'Security best practices', 'Access management', 'Secure architecture', 'Risk assessment', 'Security maintenance'], tech: [], note: 'We follow established security practices. No service can guarantee that a system is immune to attack, and we do not claim certifications we do not hold.' },
  'digital-marketing': { covers: ['Digital strategy', 'Social media management', 'Search engine optimization', 'Content strategy', 'Online brand positioning', 'Paid advertising management', 'Performance reporting'], tech: [], note: 'Marketing improves your odds; it cannot guarantee specific business results. We report honestly on what the numbers show.' },
};

export const serviceFaqs = [
  ['How does a project start?', 'You send an inquiry, we discuss your goals, and we follow up with a scoped proposal after a manual assessment.'],
  ['Can you quote instantly?', 'No. Pricing depends on scope, so every quote is prepared by a person after reviewing your requirements.'],
  ['Do you offer support after launch?', 'Yes. Maintenance and improvement options are discussed as part of the proposal.'],
];

export const solutions = [
  ['ecommerce', 'E-commerce Solutions', 'Selling online needs more than a product page.', 'A storefront with catalog, cart, payments and order management.', ['Product catalog', 'Cart and checkout', 'Order tracking', 'Admin dashboard'], 'Retailers and brands moving online', ['Payment gateways', 'Shipping providers', 'Accounting tools']],
  ['business-management', 'Business Management Systems', 'Teams juggle spreadsheets and disconnected tools.', 'One system for daily operations, records and reporting.', ['Role-based access', 'Records and workflows', 'Reports', 'Audit trail'], 'Growing companies with several teams', ['Email', 'Accounting', 'Existing databases']],
  ['crm', 'Customer Relationship Management', 'Leads and customer history get lost.', 'A CRM that tracks every contact, deal and follow-up.', ['Contact records', 'Pipeline view', 'Reminders', 'Reporting'], 'Sales and service teams', ['Email', 'Website forms', 'Messaging']],
  ['erp', 'Enterprise Resource Planning', 'Finance, stock and operations run in separate silos.', 'Connected modules that share one source of truth.', ['Finance and procurement', 'Inventory', 'HR basics', 'Dashboards'], 'Mid-size and larger organizations', ['Banking exports', 'Payroll', 'Legacy systems']],
  ['automation', 'Business Automation', 'Repetitive manual tasks slow teams down.', 'Automated workflows that handle routine steps and flag exceptions.', ['Approval flows', 'Scheduled jobs', 'Notifications', 'Data sync'], 'Operations-heavy businesses', ['APIs', 'Email', 'Spreadsheets']],
  ['booking', 'Booking and Reservation Systems', 'Phone and chat bookings cause double-booking and no-shows.', 'Online scheduling with availability rules and reminders.', ['Calendar and slots', 'Reminders', 'Payments (optional)', 'Staff view'], 'Clinics, salons, venues, services', ['Calendars', 'Payments', 'SMS and email']],
  ['lms', 'Learning Management Systems', 'Courses, attendance and progress are hard to track.', 'A platform for courses, enrollment, attendance and assessment.', ['Course enrollment', 'Attendance', 'Progress tracking', 'Secure sign-in'], 'Training institutes and schools', ['Video hosting', 'Payments', 'Email']],
  ['inventory', 'Inventory Management Systems', 'Stock counts drift and shortages surprise you.', 'Live stock records with alerts and movement history.', ['Stock levels', 'Low-stock alerts', 'Suppliers', 'Reports'], 'Retail, warehouses, manufacturers', ['Barcode scanners', 'E-commerce', 'Accounting']],
  ['portals', 'Custom Business Portals', 'Clients and partners need a secure place to self-serve.', 'A branded portal with sign-in, documents and requests.', ['Secure accounts', 'Documents', 'Requests and status', 'Messaging'], 'Service firms and distributors', ['Single sign-on', 'Storage', 'Existing systems']],
  ['digital-transformation', 'Digital Transformation', 'Legacy processes limit how fast you can change.', 'A staged roadmap that modernizes systems without disrupting operations.', ['Process review', 'Roadmap', 'Phased delivery', 'Training'], 'Organizations replacing manual or legacy workflows', ['Existing software', 'Cloud platforms']],
].map(([slug, title, problem, solution, features, who, integrations]) => ({ slug, title, problem, solution, features, who, integrations }));

const industryShared = ['Websites and portals that clarify what you offer', 'Management tools that cut manual work', 'Secure handling of customer data'];
export const industries = [
  ['healthcare', 'Healthcare', 'Clinics and care providers need reliable, privacy-conscious systems.', ['Paper-heavy records', 'Appointment no-shows', 'Data privacy'], ['Booking systems', 'Patient portals', 'Billing workflow tools']],
  ['education', 'Education', 'Institutes need to manage courses, students and communication.', ['Tracking attendance', 'Course delivery', 'Parent and student communication'], ['Learning management systems', 'Enrollment portals', 'Admin dashboards']],
  ['retail-ecommerce', 'Retail and E-commerce', 'Retailers compete on convenience across channels.', ['Stock accuracy', 'Checkout friction', 'Order fulfillment'], ['E-commerce platforms', 'Inventory systems', 'Order tracking']],
  ['hospitality', 'Restaurants and Hospitality', 'Venues juggle bookings, menus and guest experience.', ['Reservation management', 'Menu updates', 'Peak-time load'], ['Reservation systems', 'Online ordering', 'Guest websites']],
  ['real-estate', 'Real Estate', 'Agencies need listings and leads handled quickly.', ['Listing management', 'Lead follow-up', 'Client communication'], ['Listing websites', 'CRM systems', 'Client portals']],
  ['finance-professional-services', 'Finance and Professional Services', 'Firms handle sensitive client work and documents.', ['Document exchange', 'Client onboarding', 'Access control'], ['Client portals', 'Workflow automation', 'Secure dashboards']],
  ['manufacturing', 'Manufacturing', 'Production depends on accurate stock and scheduling.', ['Inventory visibility', 'Order tracking', 'Reporting'], ['Inventory systems', 'ERP modules', 'Custom dashboards']],
  ['logistics', 'Logistics', 'Dispatch and delivery depend on timely information.', ['Tracking shipments', 'Dispatch coordination', 'Paperwork'], ['Operations dashboards', 'Customer portals', 'Workflow automation']],
  ['startups', 'Startups and Entrepreneurs', 'Early teams need to launch quickly and learn fast.', ['Limited budget', 'Unclear scope', 'Speed to market'], ['MVP development', 'Landing pages', 'Scalable foundations']],
  ['corporate', 'Corporate Organizations', 'Larger organizations need integration and governance.', ['Legacy systems', 'Many stakeholders', 'Security requirements'], ['Internal tools', 'Integrations', 'Digital transformation']],
].map(([slug, title, intro, challenges, solutions]) => ({ slug, title, intro, challenges, solutions }));
export const industryBenefits = industryShared;

export const techCategories = [
  ['Frontend Development', ['React', 'Next.js', 'Vue', 'Tailwind CSS']],
  ['Backend Development', ['Node.js', 'Python', 'PHP']],
  ['Mobile Development', ['Flutter', 'React Native']],
  ['Programming Languages', ['JavaScript', 'TypeScript', 'Python', 'PHP']],
  ['Databases', ['PostgreSQL', 'MySQL', 'MongoDB']],
  ['Cloud and Infrastructure', ['AWS', 'Azure', 'Google Cloud']],
  ['AI and Machine Learning', ['Python', 'AI APIs', 'Machine learning frameworks']],
  ['Cybersecurity', ['Authentication and MFA', 'Input validation', 'Access control']],
  ['Design and Prototyping', ['Figma']],
  ['DevOps and Deployment', ['Git', 'CI/CD pipelines', 'Vercel']],
];

// Demonstration/own projects. Add real client work only when authorized.
export const projects = [
  { slug: 'ascardx-era-lms', title: 'AscardX Era Learning Management System', category: 'Software Development', label: 'Moaz Group project', summary: 'A learning platform for course enrollment, attendance and secure student access.', type: 'Internal product for AscardX Era', challenge: 'Courses, enrollment and attendance needed to live in one secure system instead of scattered tools.', objectives: ['Let students enroll in courses online', 'Record attendance reliably', 'Protect accounts with multi-factor sign-in'], solution: 'A full-stack web application with role-based access, course enrollment, attendance tracking and multi-factor authentication.', features: ['Course enrollment', 'Attendance tracking', 'Multi-factor authentication', 'Role-based access'], tech: ['Next.js 14', 'Prisma', 'MongoDB', 'NextAuth'] },
  { slug: 'medcare-rcm-website', title: 'MedCare RCM Solutions Website', category: 'Web Development', label: 'Moaz Group project', summary: 'A multi-page corporate website for a medical billing company.', type: 'Subsidiary website for MedCare RCM Solutions', challenge: 'A medical billing company needed a credible, clear web presence that explains its services and captures inquiries.', objectives: ['Explain billing services clearly', 'Present pricing and testimonials pages', 'Capture inquiries by email'], solution: 'A 15+ page website with a dedicated visual theme, service pages and email-backed contact forms.', features: ['Service pages', 'Pricing page', 'Testimonials page', 'Email inquiry forms'], tech: ['Next.js 14', 'Tailwind CSS', 'Nodemailer'] },
  { slug: 'jarvex-solutions-website', title: 'JarveX Solutions Website', category: 'Web Development', label: 'Moaz Group project', summary: 'A distinctive marketing site for a truck dispatch company.', type: 'Subsidiary website for JarveX Solutions', challenge: 'A dispatch service needed a memorable brand presence that stands apart from generic logistics sites.', objectives: ['Establish a distinct visual identity', 'Explain dispatch services', 'Turn visitors into inquiries'], solution: 'A 60+ file Next.js build with a custom visual language, structured service content and contact flow.', features: ['Custom visual identity', 'Service content', 'Contact flow'], tech: ['Next.js 14', 'App Router', 'Tailwind CSS'] },
];
export const projectCategories = ['Web Development', 'Software Development', 'Mobile Applications', 'UI/UX Design', 'AI Solutions', 'E-commerce'];

// Starter articles: review, edit or replace before promoting.
export const articles = [
  { slug: 'choosing-the-right-custom-software', title: 'When custom software beats off-the-shelf tools', category: 'Software Development', date: '2026-11-12', author: 'AscardX Era Team', excerpt: 'Off-the-shelf tools are fast to adopt. Here is how to tell when your workflow has outgrown them.', body: [['The case for off-the-shelf', 'Ready-made tools are cheaper to start and well tested. If your process is standard, they are often the right choice.'], ['Signs you have outgrown them', 'You maintain workarounds in spreadsheets, copy data between tools by hand, or pay for features you never use while missing the one you need.'], ['What to do next', 'List your five most painful manual steps. If a tool cannot remove them, scope a custom system around those steps first rather than rebuilding everything.']] },
  { slug: 'practical-ai-for-small-business', title: 'Practical AI for small businesses: where to start', category: 'Artificial Intelligence', date: '2026-11-12', author: 'AscardX Era Team', excerpt: 'AI helps most when applied to a narrow, repetitive task. A realistic way to begin.', body: [['Start with one task', 'Pick a repetitive task with clear inputs and outputs, such as sorting inquiries or drafting replies for review.'], ['Keep a person in the loop', 'AI output can be wrong. Route important decisions through a human until you trust the results.'], ['Measure honestly', 'Track time saved and errors caught for a few weeks before expanding.']] },
  { slug: 'website-security-basics', title: 'Website security basics every business should cover', category: 'Cybersecurity', date: '2026-11-12', author: 'AscardX Era Team', excerpt: 'A short checklist of foundations that prevent the most common problems.', body: [['Keep software updated', 'Outdated dependencies are a common way in. Schedule regular updates.'], ['Validate everything', 'Treat all form input as untrusted and validate it on the server, not only in the browser.'], ['Limit access', 'Give each person the minimum access they need, and turn on multi-factor authentication.']] },
];
export const articleCategories = ['Technology', 'Artificial Intelligence', 'Web Development', 'Software Development', 'Cybersecurity', 'Digital Marketing', 'Business Innovation', 'Company News'];

export const faqs = [
  ['General', 'What does AscardX Era do?', 'We design and build websites, software, mobile apps and AI-enabled tools, and offer cloud, security and marketing services.'],
  ['General', 'Who is behind AscardX Era?', 'AscardX Era is a technology company of Moaz Group of Companies.'],
  ['Services', 'Which services do you offer?', 'Web development, software development, AI solutions, mobile applications, UI/UX design, cloud solutions, cybersecurity and digital marketing.'],
  ['Project Process', 'How does a project work?', 'We discover your goals, plan, design, develop, launch and then support. See the process section on our homepage.'],
  ['Pricing', 'How much does a project cost?', 'It depends on scope. Send a quote request and we will assess it and reply with a proposal.'],
  ['Support and Maintenance', 'Do you provide support after launch?', 'Yes. Support options are agreed during proposal.'],
  ['Contact and Communication', 'How do I get in touch?', 'Use the contact form or the quote form. We reply to inquiries by email.'],
  ['AI Solutions', 'Can AI replace my team?', 'No. We build AI tools that assist people with narrow tasks and recommend human review for important decisions.'],
];
export const faqCategories = ['General', 'Services', 'Web Development', 'Software Development', 'AI Solutions', 'Project Process', 'Pricing', 'Support and Maintenance', 'Contact and Communication'];

export const jobs = []; // add { slug, title, category, type, location, summary } to publish openings

export const budgets = ['Not sure yet', 'Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'];
export const timelines = ['Flexible', 'Within 1 month', '1–3 months', '3–6 months', '6+ months'];
export const quoteServices = ['Website', 'Software', 'Mobile app', 'AI solution', 'Design', 'Digital marketing', 'Other'];
