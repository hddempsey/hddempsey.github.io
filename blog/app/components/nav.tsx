import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Harrison Dempsey, back to top">HD</a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-actions">
        <a className="linkedin-icon-link" href="https://www.linkedin.com/in/harrison-dempsey/" target="_blank" rel="noopener noreferrer" aria-label="Harrison Dempsey on LinkedIn">
          <span className="linkedin-glyph" aria-hidden="true">in</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
