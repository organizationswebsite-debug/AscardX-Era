'use client';
export default function Error({ reset }) {
  return (<section className="container-x pb-24 pt-44 text-center"><p className="font-mono text-cyan">500</p><h1 className="mt-3 font-display text-4xl font-bold">Something went wrong.</h1><p className="mt-4 text-muted">Please try again. If it keeps happening, contact us.</p><button type="button" onClick={reset} className="btn btn-primary mt-8">Try again</button></section>);
}
