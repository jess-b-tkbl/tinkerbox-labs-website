type Service = { title: string; body: string }

const SERVICES: Service[] = [
  {
    title: 'Technical consultancy',
    body: 'Architecture review, prototyping, technical due-diligence and second-opinion engagements.',
  },
  {
    title: 'Workshop & Course Facilitation',
    body: 'Design thinking, AI Safety tools best practices, technical project mentoring.',
  },
  {
    title: 'Board game design & tabletop exercises',
    body: 'Bespoke games and structured tabletop exercises for teaching, scenario-planning, and exploring AI risk and governance.',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[40rem] py-16">
      <h2 className="section-h2 mb-6 text-(--color-ink)">About</h2>

      <p className="mb-5 text-[1rem] leading-[1.6] text-(--color-ink-soft)">
        Tinkerbox Labs works at the intersection of applied AI, software engineering and
        human-centred research – building tools and helping teams build them well.
      </p>
      <p className="mb-5 text-[1rem] leading-[1.6] text-(--color-ink-soft)">
        We take on a small number of engagements at a time, ranging from a single technical
        second-opinion to multi-week research and prototyping work. The work spans software,
        evaluations, governance and the messier human side of bringing AI systems into use.
      </p>

      <ul className="mt-6 grid list-none gap-5 p-0">
        {SERVICES.map((s) => (
          <li key={s.title} className="border-t border-(--color-line) pt-4">
            <h3 className="m-0 mb-1 text-[0.95rem] font-medium">{s.title}</h3>
            <p className="m-0 text-[0.95rem] text-(--color-ink-soft)">{s.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
