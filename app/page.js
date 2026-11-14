import Link from 'next/link';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import { Why, SolutionsPreview, Process, FeaturedWork, TechStack, InsightsPreview } from '@/components/HomeSections';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container-x grid gap-10 py-24 lg:grid-cols-2 lg:items-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Technology That Moves Businesses Forward.</h2>
        <p className="leading-relaxed text-muted">We combine creativity, technical expertise and strategic thinking to deliver practical technology solutions. Every project starts with your business goals and ends with software your team can rely on.</p>
      </section>
      <ServicesGrid />
      <Why />
      <SolutionsPreview />
      <Process />
      <FeaturedWork />
      <TechStack />
      <InsightsPreview />
      <section className="container-x py-24">
        <div className="rounded-[20px] bg-cyan p-10 text-slate sm:p-14">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">Have an Idea? Let’s Turn It Into Reality.</h2>
          <p className="mt-4 text-slate/75">Let’s discuss how technology can help your business move forward.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/get-a-quote" className="btn bg-slate text-mist transition hover:bg-slate/90">Start a Project</Link>
            <Link href="/contact" className="btn border border-slate/25 text-slate transition hover:bg-slate/5">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
