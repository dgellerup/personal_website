export default function Resume() {
  return (
    <>
      <title>Resume — Dane Gellerup</title>
      <meta name="description" content="Experience, skills, and impact." />
      <section className="stack gap-m">
        <h1>Resume</h1>
        <h2>Experience</h2>
        <ul className="stack">
          <li>
            <strong>Senior Bioinformatics Engineer</strong> — Scisco Genetics
            <div className="muted">Built HLA amplicon analysis pipeline (Rust/Python), AWS deployment, 75% faster runs.</div>
          </li>
          <li>
            <strong>Software Engineer</strong> — (other roles)
            <div className="muted">Cloud, APIs, data engineering. (Fill in details.)</div>
          </li>
        </ul>

        <h2>Skills</h2>
        <p>Python, Rust, Node/TS, AWS (ECS, Batch, S3, CloudFront), Docker, PostgreSQL, Bowtie2, Vite/React.</p>

        <div className="row gap-s">
          <a className="btn" href="/Dane-Gellerup-Resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
          <a className="btn btn-ghost" href="/contact">Contact</a>
        </div>
      </section>
    </>
  )
}