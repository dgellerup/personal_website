export default function Home() {
  return (
    <>
      <title>Home — Dane Gellerup</title>
      <meta name="description" content="Senior software engineer specializing in bioinformatics, Rust/Python, and AWS." />
      <section className="stack gap-l">
        <h1>Hi, I’m Dane 👋</h1>
        <p>
          I build high-performance bioinformatics and cloud systems. My recent work includes
          <strong> DrySeq</strong>, a full AWS-hosted app for FASTA/FASTQ analysis,
          and HLA amplicon pipelines in Python/Rust.
        </p>
        <div className="cta-row">
          <a className="btn" href="/projects">View Projects</a>
          <a className="btn btn-ghost" href="/resume">View Resume</a>
        </div>
      </section>
    </>
  )
}