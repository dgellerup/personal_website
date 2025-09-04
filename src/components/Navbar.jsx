import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const link = ({ isActive }) =>
  `px-2 py-1 hover:text-indigo-600 ${
    isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 dark:text-gray-300'
  }`

export default function Navbar() {
    const [dark, setDark] = useState(
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-schema: dark)').matches)
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
        localStorage.theme = dark ? 'dark' : 'light'
    }, [dark])

    return (
        <header className="nav">
            <div className="container nav-inner">
                <nav className="links">
                    <NavLink to="/" className={link} end>Home</NavLink>
                    <NavLink to="/projects" className={link}>Projects</NavLink>
                    <NavLink to="/resume" className={link}>Resume</NavLink>
                    <NavLink to="/contact" className={link}>Contact</NavLink>

                    {/* Dark mode toggle button */}
                    <button
                        onClick={() => setDark((d) => !d)}
                        className="ml-4 px-3 py-1 rounded border text-sm border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        {dark ? '☀️ Light' : '🌙 Dark'}
                    </button>
                </nav>
            </div>
        </header>
  )
}