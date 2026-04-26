export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[40rem] py-16">
      <h2 className="section-h2 mb-6 text-(--color-ink)">Contact</h2>
      <p className="mb-5 text-[1rem] leading-[1.6] text-(--color-ink-soft)">
        For project enquiries, collaborations or an introductory chat, reach out to{' '}
        <a
          href="mailto:contact@tinkerbox-labs.co.uk"
          className="text-(--color-ink) underline underline-offset-4 decoration-(--color-line-strong) decoration-1 transition-colors hover:decoration-(--color-ink)"
        >
          contact@tinkerbox-labs.co.uk
        </a>
        .
      </p>
    </section>
  )
}
