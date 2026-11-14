import Link from 'next/link';
export const metadata = { title: 'Page not found' };
export default function NotFound() {
  return (<section className="container-x pb-24 pt-44 text-center"><p className="font-mono text-cyan">404</p><h1 className="mt-3 font-display text-4xl font-bold">This page could not be found.</h1><p className="mt-4 text-muted">It may have moved, or the address may be wrong.</p><Link href="/" className="btn btn-primary mt-8">Back to home</Link></section>);
}
