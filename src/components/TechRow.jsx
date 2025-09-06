export default function TechRow() {
  const items = [
    { name: 'Python',       src: '/tech/python.png',       href: 'https://www.python.org/' },
    { name: 'TypeScript',   src: '/tech/typescript.png',   href: 'https://www.typescriptlang.org/' },
    { name: 'JavaScript',   src: '/tech/javascript.png',   href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Rust',         src: '/tech/rust.png',         href: 'https://www.rust-lang.org/' },
    { name: 'AWS',          src: '/tech/aws.png',          href: 'https://aws.amazon.com/' },
    { name: 'PostgreSQL',   src: '/tech/postgresql.png',   href: 'https://www.postgresql.org/' },
    { name: 'Prisma',       src: '/tech/prisma.png',       href: 'https://www.prisma.io/' },
    { name: 'Express.js',   src: '/tech/express.png',      href: 'https://expressjs.com/' },
    { name: 'Angular',      src: '/tech/angular.png',      href: 'https://angular.dev/' },
    { name: 'React',        src: '/tech/react.png',        href: 'https://react.dev/' },
  ]

  return (
    <section id="stack" className="scroll-mt-20 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          Languages &amp; tools
        </h2>

        <div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6
                     p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
        >
          {items.map((it) => (
            <a
              key={it.name}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center hover:opacity-80 transition"
              title={it.name}
              aria-label={it.name}
            >
              <img
                src={it.src}
                alt={it.name}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
              {/* optional labels */}
              {/* <span className="mt-1 text-xs text-gray-600 dark:text-gray-300">{it.name}</span> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}