import Link from 'next/link';
import Logo from './Logo';
import { brand, footerColumns } from '@/lib/site';

export default function Footer() {
  const { email, phone, address } = brand.contact;
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">AscardX Era builds practical digital solutions for businesses ready to grow. A company of {brand.parent}.</p>
          <p className="mt-4 font-display text-sm font-semibold text-cyan">{brand.philosophy}</p>
          {/* TODO: social icons render only when real profile URLs are added to lib/site.js */}
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-display text-sm font-semibold">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map(([label, href]) => (
                <li key={href}><Link href={href} className="text-sm text-muted transition hover:text-cyan">{label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} AscardX Era, a {brand.parent} company. All rights reserved.</p>
          <p className="font-mono">
            {email ? <a href={`mailto:${email}`}>{email}</a> : 'Email: to be added'} · {phone ?? 'Phone: to be added'} · {address ?? 'Address: to be added'}
          </p>
          <a href="#main" className="text-cyan hover:underline">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
