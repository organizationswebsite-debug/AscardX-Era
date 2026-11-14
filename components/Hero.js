import Link from 'next/link';

// Pure CSS/SVG orb: no WebGL cost on mobile. Swap for React Three Fiber later if desired.
function Orb() {
  return (
    <div className="orb-float relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_28%,#19B8FF_0%,#0866E8_38%,#0B2D59_72%,#071426_100%)] shadow-[0_0_120px_20px_rgba(8,102,232,.35)]" />
      <svg viewBox="0 0 400 400" className="orb-ring absolute inset-0 h-full w-full" fill="none" stroke="#19B8FF">
        <ellipse cx="200" cy="200" rx="190" ry="64" strokeOpacity=".55" transform="rotate(-24 200 200)" />
        <ellipse cx="200" cy="200" rx="150" ry="150" strokeOpacity=".18" strokeDasharray="2 8" />
        <circle cx="365" cy="132" r="5" fill="#19B8FF" stroke="none" />
      </svg>
      <svg viewBox="0 0 400 400" className="orb-ring-rev absolute inset-0 h-full w-full" fill="none" stroke="#fff">
        <ellipse cx="200" cy="200" rx="176" ry="52" strokeOpacity=".25" transform="rotate(32 200 200)" />
        <circle cx="46" cy="262" r="4" fill="#fff" stroke="none" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_20%,#0B2D59_0%,#071426_60%)] pt-[72px]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      <div className="container-x relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="hero-in font-mono text-xs text-cyan" style={{ animationDelay: '.05s' }}>A Moaz Group company</p>
          <h1 className="hero-in mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: '.15s' }}>
            Engineering the Future Through Intelligent Technology.
          </h1>
          <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ animationDelay: '.3s' }}>
            AscardX Era empowers businesses with innovative digital solutions, intelligent software, and future-ready technology designed to turn ambitious ideas into meaningful impact.
          </p>
          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: '.45s' }}>
            <Link href="/get-a-quote" className="btn btn-primary">Let’s Build Something Great</Link>
            <Link href="/services" className="btn btn-ghost">Explore Our Services</Link>
          </div>
        </div>
        <Orb />
      </div>
    </section>
  );
}
