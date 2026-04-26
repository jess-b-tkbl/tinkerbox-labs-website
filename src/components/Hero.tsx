export default function Hero() {
  return (
    <section className="pt-[30px] pb-6" aria-labelledby="hero-title">
      <div className="relative isolate mx-auto max-w-[80%] px-12 pt-16 pb-8 text-left max-md:px-0 max-md:pt-12">
        <div className="hero-blob" aria-hidden="true" />

        <h1 id="hero-title" className="hero-h1">
          A small studio for thoughtful software, research and facilitation.
        </h1>

        <p className="my-6 text-[1.05rem] leading-[1.55] text-(--color-ink-soft)">
          Working at the intersection of applied AI, software engineering and human-centred research – building tools and helping teams build them well. Based in London, UK.
        </p>

        <p className="m-0">
          <a className="btn-pill" href="#contact">Get in touch</a>
        </p>
      </div>
    </section>
  )
}
