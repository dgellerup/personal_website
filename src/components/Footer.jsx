export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Dane Gellerup • <a href="https://github.com/dgellerup" target="_blank" rel="noopener noreferrer">GitHub</a> • <a href="https://www.linkedin.com/in/dane-gellerup" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </footer>
  )
}