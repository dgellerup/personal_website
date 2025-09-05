import React from "react"
import ImageCarousel from "@/components/ImageCarousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Info } from "lucide-react"
import TechRow from "@/components/TechRow"

export default function Home() {
  return (
    <>
        <div className="mx-auto max-w-6xl p-6 space-y-8">
            <section id="home" className="scroll-mt-20 mb-8">
                <div className="grid grid-cols-2 gap-6">
                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-col items-center text-center">
                            <CardTitle className="flex items-center justify-center gap-2 text-xl">
                                Hello there. I&lsquo;m Dane
                            </CardTitle>
                            <CardContent>I build high-performance bioinformatics analyses, systems, and tools. I am an experienced Senior Full Stack Engineer with an extensive background in Bioinformatics, Next-Generation Sequencing, and Computer Science.</CardContent>
                        </CardHeader>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow h-72">
                        <CardContent className="flex items-center justify-center h-full p-6">
                            <img
                                src="/profile_image.jpg"
                                alt="Profile picture"
                                className="rounded-lg shadow-md max-h-64 object-cover"
                            />
                        </CardContent>
                    </Card>
                </div>
            </section>

            <TechRow />

            <section id="projects" className="scroll-mt-20 mb-8">
                <Card className="hover:shadow-md transition-shadow pb-4 space-y-2">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-xl">
                            Projects
                        </CardTitle>
                    </CardHeader>

                    <Card className="hover:shadow-md transition-shadow w-11/12 md:w-11/12 mx-auto bg-blue-600">
                        <CardHeader className="flex flex-col items-center">
                            <CardTitle className="flex items-center justify-center text-white gap-2 text-xl">
                                DrySeq - <a href="https://www.dryseq.com" className="text-white underline">https://www.dryseq.com</a>
                            </CardTitle>
                            <CardDescription className="text-white text-lg">
                                Full-Stack Genomic Analysis Platform
                            </CardDescription>
                            <CardDescription className="text-white">
                                Currently in development at: <a href="https://github.com/dgellerup/DrySeq" className="px-3 py-2 text-sm font-medium text-white underline hover:text-indigo-600" target="_blank" rel="noopener noreferrer">github.com/dgellerup/DrySeq</a>
                            </CardDescription>
                        </CardHeader>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg justify-center">
                                    <Info className="h-5 w-5" /> How it works
                                </CardTitle>
                                <CardDescription>Three simple steps</CardDescription>
                            </CardHeader>
                            <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
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
                            {/* full-bleed carousel (no inner card, no padding) */}
                            <CardContent className="p-0 overflow-hidden rounded-b-xl">
                                <ImageCarousel
                                images={[
                                    { src: '/projects/dryseq-1.png', alt: 'DrySeq Home Page', caption: 'Home Page' },
                                    { src: '/projects/dryseq-2.png', alt: 'Overview Page', caption: 'Dashboard — run overview' },
                                    { src: '/projects/dryseq-3.png', alt: 'File Management Page', caption: 'View and Manage Files' },
                                    { src: '/projects/dryseq-4.png', alt: 'Upload Page', caption: 'Upload FASTA Files' },
                                    { src: '/projects/dryseq-5.png', alt: 'PCR Page', caption: 'Virtual PCR' },
                                    { src: '/projects/dryseq-6.png', alt: 'FASTQ Page', caption: 'FASTQ Generation' },
                                ]}
                                />
                            </CardContent>
                        </Card>
                    </Card>

                    
                </Card>
            </section>

            <section id="resume" className="scroll-mt-20 mb-8">
                <Card className="hover:shadow-md transition-shadow pb-4 space-y-2">
                    <CardHeader className="grid grid-cols-3 items-center">
                        <div />

                        <CardTitle className="text-xl text-center">
                            Resume
                        </CardTitle>

                        <div className="flex justify-end">
                            <a
                                href="/Dane_Gellerup_Resume.pdf"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="m" variant="ghost">
                                    Download Resume <Download className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </CardHeader>
                    
                    <Card className="hover:shadow-md transition-shadow w-11/12 md:w-11/12 mx-auto bg-[#ff8c00]">
                        <CardHeader className="flex flex-col items-center">
                            <CardTitle className="flex items-center justify-center text-white gap-2 text-xl">
                                Scisco Genetics Inc
                            </CardTitle>
                            <CardDescription className="text-white text-lg">
                                Senior Bioinformatics Engineer
                            </CardDescription>
                            <CardDescription className="text-white">
                                January 2018 - Present
                            </CardDescription>
                        </CardHeader>
                        <Card className="pt-2">
                            <CardContent>
                                {/* Bulleted list of duties */}
                                <ul className="list-disc list-inside space-y-1 text-left text-black">
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

                    <Card className="hover:shadow-md transition-shadow w-11/12 md:w-11/12 mx-auto bg-[#003294]">
                        <CardHeader className="flex flex-col items-center">
                            <CardTitle className="flex items-center justify-center text-white gap-2 text-xl">
                                LS Bio
                            </CardTitle>
                            <CardDescription className="text-white text-lg">
                                Genomics Analyst
                            </CardDescription>
                            <CardDescription className="text-white">
                                October 2017 - December 2017
                            </CardDescription>
                        </CardHeader>
                        <Card className="pt-2">
                            <CardContent>
                                {/* Bulleted list of duties */}
                                <ul className="list-disc list-inside space-y-1 text-left text-black">
                                    <li>Developed custom pipelines and software for human genome analysis using GATK Best Practices, enabling robust variant discovery across large Illumina sequencing datasets.</li>
                                    <li>Automated preprocessing steps including alignment, deduplication, and base quality recalibration using BBTools, BWA, Picard, and GATK.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow w-11/12 md:w-11/12 mx-auto bg-[#00C1D5]">
                        <CardHeader className="flex flex-col items-center">
                            <CardTitle className="flex items-center justify-center text-white gap-2 text-xl">
                                Fred Hutchinson Cancer Research Center
                            </CardTitle>
                            <CardDescription className="text-white text-lg">
                                Graduate Intern - Bioinformatics
                            </CardDescription>
                            <CardDescription className="text-white">
                                July 2017 - September 2017
                            </CardDescription>
                        </CardHeader>
                        <Card className="pt-2">
                            <CardContent>
                                {/* Bulleted list of duties */}
                                <ul className="list-disc list-inside space-y-1 text-left text-black">
                                    <li>Created custom Python scripts to manage viral sequence data, allowing for quicker lookup and access by the research team.</li>
                                    <li>Created quality analysis workflows to scan sequence data on intake and report reads/files outside of quality threshold.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow w-11/12 md:w-11/12 mx-auto bg-[#C5050C]">
                        <CardHeader className="flex flex-col items-center">
                            <CardTitle className="flex items-center justify-center text-white gap-2 text-xl">
                                AIDS Vaccine Research Laboratory - UW Madison
                            </CardTitle>
                            <CardDescription className="text-white text-lg">
                                Associate Research Specialist - NGS
                            </CardDescription>
                            <CardDescription className="text-white">
                                October 2013 - August 2016
                            </CardDescription>
                        </CardHeader>
                        <Card className="pt-2">
                            <CardContent>
                                {/* Bulleted list of duties */}
                                <ul className="list-disc list-inside space-y-1 text-left text-black">
                                    <li>Managed end-to-end processing of clinical and research samples for Illumina Miseq sequencing, including library prep, QC, and run management.</li>
                                    <li>Developed custom Python, Bash, and R scripts to streamline demultiplexing, adapter trimming, and downstream QC analysis for HIV/AIDS research pipelines.</li>
                                    <li>Maintained meticulous documentation and adhered to lab protocols supporting regulated academic genomics research.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Card>
                </Card>
            </section>

            <section id="education" className="scroll-mt-20 mb-8">
                <Card className="hover:shadow-md transition-shadow pb-4 space-y-2">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-xl">Education</CardTitle>
                    </CardHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="group overflow-hidden w-11/12 md:w-11/12 mx-auto bg-[#C5050C] hover:shadow-lg transition-shadow ring-1 ring-white/10">
                            {/* logo centered */}
                            <div className="flex justify-center mt-4">
                                <img
                                src="/uw-crest-color-web-digital.png"
                                alt="UW Madison Motion W Logo"
                                className="h-20 w-auto object-contain" // adjust size here
                                />
                            </div>

                            {/* soft highlight */}
                            <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(500px_200px_at_0%_-20%,#fff,transparent)]" />

                            <CardHeader className="relative flex flex-col items-center text-center text-white space-y-1">
                                <CardTitle className="text-white text-xl">University of Wisconsin at Madison</CardTitle>
                                <CardDescription className="text-white/95 text-lg">BS — Genetics</CardDescription>
                                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white/95">
                                    <span className="font-medium">Class of 2012</span>
                                </div>
                            </CardHeader>
                        </Card>

                        <Card className="group overflow-hidden w-11/12 md:w-11/12 mx-auto bg-[#C5050C] hover:shadow-lg transition-shadow ring-1 ring-white/10">
                            {/* logo centered */}
                            <div className="flex justify-center mt-4">
                                <img
                                src="/bu.png"
                                alt="Boston University Crest"
                                className="h-20 w-auto object-contain" // adjust size here
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(500px_200px_at_0%_-20%,#fff,transparent)]" />
                            
                            <CardHeader className="relative flex flex-col items-center text-center text-white space-y-1">
                                <CardTitle className="text-white text-xl">Boston University</CardTitle>
                                <CardDescription className="text-white/95 text-lg">MS — Bioinformatics</CardDescription>
                                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white/95">
                                    <span className="font-medium">Class of 2017</span>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </Card>
            </section>

            <section id="contact" className="scroll-mt-20 mb-8">
                <Card className="hover:shadow-md transition-shadow pb-4 space-y-2">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-xl">
                            Contact Me
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        danegellerup@uwalumni.com
                    </CardContent>
                </Card>
            </section>
        </div>
      <title>Home — Dane Gellerup</title>
      <meta name="description" content="Senior software engineer specializing in bioinformatics, Rust/Python, and AWS." />
    </>
  )
}