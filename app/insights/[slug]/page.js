import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, Section, CTA } from '@/components/ui';
import { articles } from '@/lib/content';
import { brand } from '@/lib/site';
export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }) { const a = articles.find((x) => x.slug === params.slug); return a ? { title: a.title, description: a.excerpt } : {}; }
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
export default function Article({ params }) {
  const a = articles.find((x) => x.slug === params.slug); if (!a) notFound();
  const words = a.body.flat().join(' ').split(/\s+/).length;
  const url = encodeURIComponent(`${brand.url}/insights/${a.slug}`);
  const share = [['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${url}`], ['X', `https://twitter.com/intent/tweet?url=${url}`], ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${url}`]];
  return (<>
    <PageHero title={a.title}><p className="mt-4 font-mono text-xs text-cyan">{a.category} · {a.author} · {a.date} · {Math.max(1, Math.round(words / 200))} min read</p></PageHero>
    <Section>
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Table of contents" className="text-sm"><p className="mb-3 font-display font-semibold">Contents</p><ul className="space-y-2">{a.body.map(([h]) => <li key={h}><a href={`#${slugify(h)}`} className="text-muted hover:text-cyan">{h}</a></li>)}</ul></nav>
        <article className="max-w-2xl">
          {a.body.map(([h, p]) => <div key={h} className="mb-8"><h2 id={slugify(h)} className="scroll-mt-28 font-display text-2xl font-semibold">{h}</h2><p className="mt-3 leading-relaxed text-muted">{p}</p></div>)}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6 text-sm"><span className="text-muted">Share:</span>{share.map(([n, h]) => <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">{n}</a>)}</div>
          <Link href="/insights" className="mt-6 inline-block text-sm text-cyan hover:underline">All articles</Link>
        </article>
      </div>
    </Section>
    <CTA title="Want to talk about your project?" />
  </>);
}
