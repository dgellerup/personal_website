export default function Navbar() {
  const link =
    'px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600'

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 h-14">
        <div className="font-bold">Dane Gellerup</div>
        <nav className="flex items-center gap-2">
          <a className={link} href="#home">Home</a>
          <a className={link} href="#projects">Projects</a>
          <a className={link} href="#resume">Resume</a>
          <a className={link} href="#education">Education</a>
          <a className={link} href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}