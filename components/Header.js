'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import { nav } from '@/lib/site';

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const active = (href) => (href === '/' ? path === '/' : path.startsWith(href));

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-slate/10 bg-ink/90 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="AscardX Era home"><Logo /></Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} aria-current={active(item.href) ? 'page' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm transition hover:text-cyan ${active(item.href) ? 'text-cyan' : 'text-white/80'}`}>
                {item.label}
                <span className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-cyan transition-transform duration-300 ${active(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-[20px] border border-white/10 bg-navy/95 p-3 shadow-glow backdrop-blur-xl">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="rounded-xl p-3 transition hover:bg-white/5">
                        <span className="block font-display text-sm font-semibold">{c.label}</span>
                        <span className="mt-1 block text-xs leading-snug text-muted">{c.blurb}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/get-a-quote" className="btn btn-primary hidden sm:inline-flex">Get a Quote</Link>
          <button type="button" className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            <span className={`h-0.5 w-5 bg-slate transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-slate transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-slate transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-ink px-5 pb-10 pt-4 xl:hidden">
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-white/10">
              {item.children ? (
                <>
                  <button type="button" className="flex w-full items-center justify-between py-4 text-left font-display text-lg" aria-expanded={sub} onClick={() => setSub(!sub)}>
                    {item.label}<span aria-hidden className={`transition ${sub ? 'rotate-180' : ''}`}>⌄</span>
                  </button>
                  {sub && (
                    <div className="pb-3 pl-3">
                      <Link href={item.href} className="block py-2 text-sm text-cyan">All services</Link>
                      {item.children.map((c) => <Link key={c.href} href={c.href} className="block py-2 text-sm text-muted">{c.label}</Link>)}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className={`block py-4 font-display text-lg ${active(item.href) ? 'text-cyan' : ''}`}>{item.label}</Link>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <Link href="/get-a-quote" className="btn btn-primary">Get a Quote</Link>
          <Link href="/contact" className="btn btn-ghost">Contact</Link>
        </div>
      </div>
    </header>
  );
}
