import Link from 'next/link';

// Pure CSS/SVG orb: no WebGL cost on mobile. Swap for React Three Fiber later if desired.
function Orb() {
  return (
    <div className="orb-float relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_30%_28%,#DDF564_0%,#C8E91F_34%,#59631C_68%,#141510_100%)] shadow-[0_0_100px_12px_rgba(151,177,20,.25)]" />
      <svg viewBox="0 0 400 400" className="orb-ring absolute inset-0 h-full w-full" fill="none" stroke="#C8E91F">
        <ellipse cx="200" cy="200" rx="190" ry="64" strokeOpacity=".75" transform="rotate(-24 200 200)" />
        <ellipse cx="200" cy="200" rx="150" ry="150" stroke="#141510" strokeOpacity=".18" strokeDasharray="2 8" />
        <circle cx="365" cy="132" r="5" fill="#141510" stroke="none" />
      </svg>
      <svg viewBox="0 0 400 400" className="orb-ring-rev absolute inset-0 h-full w-full" fill="none" stroke="#141510">
        <ellipse cx="200" cy="200" rx="176" ry="52" strokeOpacity=".35" transform="rotate(32 200 200)" />
        <circle cx="46" cy="262" r="4" fill="#C8E91F" stroke="none" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_72%_45%,#E6E9E0_0%,#F0F1ED_58%)] pt-[72px]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#141510_1px,transparent_1px),linear-gradient(90deg,#141510_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      <div className="container-x relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="hero-in font-mono text-xs text-cyan" style={{ animationDelay: '.05s' }}>A Moaz Group company</p>
          <h1 className="hero-in mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl" style={{ animationDelay: '.15s' }}>
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
