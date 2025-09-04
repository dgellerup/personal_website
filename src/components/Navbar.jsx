import { NavLink } from 'react-router-dom'

const link = ({ isActive }) =>
  `nav-link ${isActive ? 'nav-active' : ''}`

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">Dane Gellerup</div>
        <nav className="links">
          <NavLink to="/" className={link} end>Home</NavLink>
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/resume" className={link}>Resume</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}