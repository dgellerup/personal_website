export default function TechRow() {
  const items = [
    { name: 'Python',       src: '/tech/python.png',       href: 'https://www.python.org/' },
    { name: 'TypeScript',   src: '/tech/typescript.png',   href: 'https://www.typescriptlang.org/' },
    { name: 'JavaScript',   src: '/tech/javascript.png',   href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Rust',         src: '/tech/rust.png',         href: 'https://www.rust-lang.org/' },
    { name: 'AWS',          src: '/tech/aws.png',          href: 'https://aws.amazon.com/' },
    { name: 'PostgreSQL',   src: '/tech/postgresql.png',   href: 'https://www.postgresql.org/' },
    { name: 'Express.js',   src: '/tech/express.png',      href: 'https://expressjs.com/' },
    { name: 'Angular',      src: '/tech/angular.png',      href: 'https://angular.dev/' },
    { name: 'React',        src: '/tech/react.png',        href: 'https://react.dev/' },
  ]

  return (
    <section id="stack" className="scroll-mt-20 mb-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* optional heading */}
        <h2 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          Languages & tools
        </h2>

        {/* horizontally scrollable on small screens, wraps on md+ */}
        <div className="relative">
          <div className="flex gap-12 overflow-x-auto md:flex-wrap md:overflow-visible
                          p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
                          [scrollbar-width:thin]">
            {items.map((it) => (
              <a
                key={it.name}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 inline-flex items-center gap-2 rounded-lg px-3 py-2
                           hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                title={it.name}
                aria-label={it.name}
              >
                <img
                  src={it.src}
                  alt=""
                  className="h-7 w-7 object-contain"
                  loading="lazy"
                />
                {/*<span className="hidden sm:inline text-sm text-gray-700 dark:text-gray-200">
                  {it.name}
                </span>*/}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}