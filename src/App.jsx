import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import './App.css'

function App() {

  return (
    <>
      {/* Site-wide fallbacks (can be overridden per page) */}
      <title>Dane Gellerup — Senior Full Stack Bioinformatics Engineer</title>
      <meta
        name="description"
        content="Senior software engineer building high-performance bioinformatics and cloud systems."
      />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
