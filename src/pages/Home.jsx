import React from "react"
import ImageCarousel from "@/components/ImageCarousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Info } from "lucide-react"
import TechRow from "@/components/TechRow"

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 py-6 space-y-8">
        {/* Intro */}
        <section id="home" className="scroll-mt-20 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="items-center text-center p-4 sm:p-6">
                <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl">
                  Hello there. I&lsquo;m Dane.
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base">
                I build high-performance bioinformatics analyses, systems, and tools. I am an experienced Senior Full Stack Engineer with an extensive background in Bioinformatics, Next-Generation Sequencing, and Computer Science.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-xl">
                  <img
                    src="/profile_image.jpg"
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <TechRow />

        {/* Projects */}
        <section id="projects" className="scroll-mt-20 mb-6 sm:mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="items-center p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">Projects</CardTitle>
            </CardHeader>

            <Card className="hover:shadow-md transition-shadow w-full mx-auto bg-blue-600">
              <CardHeader className="items-center p-4 sm:p-6">
                <CardTitle className="flex items-center justify-center text-white gap-2 text-lg sm:text-xl">
                  DrySeq —{" "}
                  <a
                    href="https://www.dryseq.com"
                    className="underline text-white"
                    target="_blank" rel="noopener noreferrer"
                  >
                    www.dryseq.com
                  </a>
                </CardTitle>
                <CardDescription className="text-white text-base sm:text-lg">
                  Full-Stack Genomic Analysis Platform
                </CardDescription>
                <CardDescription className="text-white text-sm sm:text-base">
                  In development at:{" "}
                  <a
                    href="https://github.com/dgellerup/DrySeq"
                    className="underline text-white"
                    target="_blank" rel="noopener noreferrer"
                  >
                    github.com/dgellerup/DrySeq
                  </a>
                </CardDescription>
              </CardHeader>

              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 justify-center text-base sm:text-lg">
                    <Info className="h-5 w-5" /> How it works
                  </CardTitle>
                  <CardDescription className="text-center text-sm sm:text-base">Three simple steps</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:gap-6 text-sm sm:text-base md:grid-cols-3 p-4 sm:p-6">
                  <div>
                    <div className="font-medium mb-1">1) Upload</div>
                    <p>Upload <strong>FASTA</strong> files (genomic/reference/primers) to your DrySeq account. Files are tracked in the DB and stored in S3 (auto-deleted after 7 days).</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">2) Run PCR</div>
                    <p>Pick <strong>genomic</strong> and <strong>primer</strong> files and launch PCR Analysis.</p>
                  </div>
                  <div>
                    <div className="font-medium mb-1">3) Generate FASTQs</div>
                    <p>Select a PCR product file to use as the basis for generating mocked FASTQ files.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0 overflow-hidden rounded-b-xl">
                  <div className="aspect-video sm:aspect-[16/9]">
                    <ImageCarousel
                      images={[
                        { src: '/projects/dryseq-1.png', alt: 'DrySeq Home Page', caption: 'Home Page' },
                        { src: '/projects/dryseq-2.png', alt: 'Overview Page', caption: 'Dashboard Overview' },
                        { src: '/projects/dryseq-3.png', alt: 'File Management Page', caption: 'View and Manage Files' },
                        { src: '/projects/dryseq-4.png', alt: 'Upload Page', caption: 'Upload FASTA Files' },
                        { src: '/projects/dryseq-5.png', alt: 'PCR Page', caption: 'Virtual PCR' },
                        { src: '/projects/dryseq-6.png', alt: 'FASTQ Page', caption: 'FASTQ Generation' },
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>
            </Card>
          </Card>
        </section>

        {/* Resume */}
        <section id="resume" className="scroll-mt-20 mb-6 sm:mb-8">
          <Card className="hover:shadow-md transition-shadow space-y-2">
            <CardHeader className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 p-4 sm:p-6">
              <div />
              <CardTitle className="text-lg sm:text-xl text-center">Resume</CardTitle>
              <div className="flex sm:justify-end">
                <a href="/Dane_Gellerup_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="sm" variant="ghost" className="w-full sm:w-auto py-3">
                    Download Resume <Download className="h-5 w-5 ml-2" />
                  </Button>
                </a>
              </div>
            </CardHeader>

            <Card className="w-full mx-auto bg-[#ff8c00]">
              <CardHeader className="items-center p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">Scisco Genetics Inc</CardTitle>
                <CardDescription className="text-white text-base sm:text-lg">Senior Bioinformatics Engineer</CardDescription>
                <CardDescription className="text-white text-sm sm:text-base">January 2018 - Present</CardDescription>
              </CardHeader>
              <Card className="pt-2">
                <CardContent className="text-sm sm:text-base px-4 sm:px-6 pb-4 sm:pb-6">
                  <ul className="list-disc pl-5 space-y-2 text-left">
                    <li>Design, build, and deploy backend systems across AWS, Linux, macOS, and Windows, supporting both internal tools and external partner-facing platforms used by clinics across the U.S. and internationally.</li>
                    <li>Develop and maintain APIs and backend logic powering Sciscloud, Scisco Genetics’ secure web application, enabling automated ETL pipelines, result registration, and real-time data updates.</li>
                    <li>Architect and manage custom AWS ECR Docker images, reducing container build times by 80% and saving dozens of engineering hours monthly.</li>
                    <li>Lead and own production-ready software systems, including infrastructure supporting clinical donor matching workflows and longitudinal patient monitoring.</li>
                    <li>Implement CI/CD pipelines using Git, Docker, and CircleCI with integrated unit and integration testing across multiple environments.</li>
                    <li>Refactor performance-critical modules in Python and Rust, achieving a 75% runtime reduction for core analysis pipelines.</li>
                    <li>Built tools to accelerate research and development, including a streaming file splitter for parallel AWS Lambda processing of 100+ GB datasets stored on S3.</li>
                    <li>Actively modernize and support internal infrastructure by evaluating emerging technologies and implementing scalable, best-practice solutions.</li>
                    <li>Collaborate cross-functionally with the CEO, CTO, and senior stakeholders to align infrastructure development with scientific and business goals.</li>
                  </ul>
                </CardContent>
              </Card>
            </Card>

            <Card className="w-full mx-auto bg-[#003294]">
                <CardHeader className="items-center p-4 sm:p-6">
                    <CardTitle className="text-white text-lg sm:text-xl">LS Bio</CardTitle>
                    <CardDescription className="text-white text-base sm:text-lg">Genomics Analyst</CardDescription>
                    <CardDescription className="text-white text-sm sm:text-base">October 2017 - December 2017</CardDescription>
                </CardHeader>
                <Card className="pt-2">
                    <CardContent className="text-sm sm:text-base px-4 sm:px-6 pb-4 sm:pb-6">
                        <ul className="list-disc pl-5 space-y-2 text-left">
                            <li>Developed custom pipelines and software for human genome analysis using GATK Best Practices, enabling robust variant discovery across large Illumina sequencing datasets.</li>
                            <li>Automated preprocessing steps including alignment, deduplication, and base quality recalibration using BBTools, BWA, Picard, and GATK.</li>
                        </ul>
                    </CardContent>
                </Card>
            </Card>

            <Card className="w-full mx-auto bg-[#00C1D5]">
                <CardHeader className="items-center p-4 sm:p-6">
                    <CardTitle className="text-white text-lg sm:text-xl">Fred Hutchinson Cancer Research Center</CardTitle>
                    <CardDescription className="text-white text-base sm:text-lg">Graduate Intern - Bioinformatics</CardDescription>
                    <CardDescription className="text-white text-sm sm:text-base">July 2017 - September 2017</CardDescription>
                </CardHeader>
                <Card className="pt-2">
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-left">
                            <li>Created custom Python scripts to manage viral sequence data, allowing for quicker lookup and access by the research team.</li>
                            <li>Created quality analysis workflows to scan sequence data on intake and report reads/files outside of quality threshold.</li>
                        </ul>
                    </CardContent>
                </Card>
            </Card>

            <Card className="w-full mx-auto bg-[#C5050C]">
                <CardHeader className="items-center p-4 sm:p-6">
                    <CardTitle className="text-white text-lg sm:text-xl">AIDS Vaccine Research Laboratory - UW Madison</CardTitle>
                    <CardDescription className="text-white text-base sm:text-lg">Associate Research Specialist - NGS</CardDescription>
                    <CardDescription className="text-white text-sm sm:text-base">October 2013 - August 2016</CardDescription>
                </CardHeader>
                <Card className="pt-2">
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-left">
                            <li>Managed end-to-end processing of clinical and research samples for Illumina Miseq sequencing, including library prep, QC, and run management.</li>
                            <li>Developed custom Python, Bash, and R scripts to streamline demultiplexing, adapter trimming, and downstream QC analysis for HIV/AIDS research pipelines.</li>
                            <li>Maintained meticulous documentation and adhered to lab protocols supporting regulated academic genomics research.</li>
                        </ul>
                    </CardContent>
                    </Card>
                </Card>
            </Card>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-20 mb-6 sm:mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="items-center p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">Education</CardTitle>
            </CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* UW card */}
              <Card className="group relative overflow-hidden w-full bg-[#C5050C] hover:shadow-lg transition-shadow ring-1 ring-white/10">
                <div className="flex justify-center mt-4">
                  <img src="/uw-crest-color-web-digital.png" alt="UW Madison Motion W Logo" className="h-16 sm:h-20 w-auto object-contain" loading="lazy" />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(500px_200px_at_0%_-20%,#fff,transparent)]" />
                <CardHeader className="relative items-center text-center text-white space-y-1 p-4 sm:p-6">
                  <CardTitle className="text-white text-lg sm:text-xl">University of Wisconsin at Madison</CardTitle>
                  <CardDescription className="text-white/95 text-base sm:text-lg">BS — Genetics</CardDescription>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white/95">
                    <span className="font-medium">2012</span>
                  </div>
                </CardHeader>
              </Card>

              {/* BU card */}
              <Card className="group relative overflow-hidden w-full bg-[#C5050C] hover:shadow-lg transition-shadow ring-1 ring-white/10">
                <div className="flex justify-center mt-4">
                  <img src="/bu.png" alt="Boston University Crest" className="h-16 sm:h-20 w-auto object-contain" loading="lazy" />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(500px_200px_at_0%_-20%,#fff,transparent)]" />
                <CardHeader className="relative items-center text-center text-white space-y-1 p-4 sm:p-6">
                  <CardTitle className="text-white text-lg sm:text-xl">Boston University</CardTitle>
                  <CardDescription className="text-white/95 text-base sm:text-lg">MS — Bioinformatics</CardDescription>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white/95">
                    <span className="font-medium">2017</span>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="items-center p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">Contact Me</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm sm:text-base pb-6">
              <a href="mailto:danegellerup@uwalumni.com" className="underline break-all">
                danegellerup@uwalumni.com
              </a>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Page head (ensure this ends up in your <Head> / layout) */}
      <title>Home — Dane Gellerup</title>
      <meta name="description" content="Senior software engineer specializing in bioinformatics, Rust/Python, and AWS." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
