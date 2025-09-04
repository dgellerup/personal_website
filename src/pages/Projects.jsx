const projects = [
  {
    title: 'DrySeq',
    desc: 'React/Prisma/Express app on AWS for primer/PCR analysis and mock FASTQ generation.',
    tech: ['React', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'AWS'],
    links: [
      { label: 'Live', href: 'https://www.dryseq.com' },
      { label: 'GitHub', href: 'https://github.com/dgellerup/DrySeq' },
    ],
  },
  {
    title: 'HLA Amplicon Pipeline',
    desc: 'Rust/Python pipeline: dedup, merge, consensus, mapping/typing; 75% faster runs on AWS.',
    tech: ['Rust', 'Python', 'Bowtie2', 'AWS Batch/ECS'],
    links: [{ label: 'Writeup', href: '#' }],
  },
]

export default function Projects() {
  return (
    <>
      <title>Projects — Dane Gellerup</title>
      <meta name="description" content="Selected projects in bioinformatics, cloud, and systems engineering." />
      <section className="stack gap-m">
        <h1>Projects</h1>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <ul className="tags">
                {p.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className="row gap-s">
                {p.links.map(l => (
                  <a key={l.label} className="btn btn-ghost" href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}