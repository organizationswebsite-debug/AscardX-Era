import Link from 'next/link';
import { services } from '@/lib/site';

export default function ServicesGrid() {
  return (
    <section className="bg-mist py-24 text-slate">
      <div className="container-x">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">Technology Solutions Built for Your Business.</h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="group block h-full rounded-[20px] border border-slate/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-electric hover:shadow-[0_16px_40px_-16px_rgba(151,177,20,.32)]">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">{s.blurb}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-electric group-hover:underline">Learn more</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
