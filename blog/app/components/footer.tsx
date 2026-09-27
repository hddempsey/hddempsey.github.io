export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#top">HD</a>
      <p>© {new Date().getFullYear()} Harrison Dempsey</p>
      <div className="footer-links">
        <a href="https://github.com/hddempsey" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href="https://www.linkedin.com/in/harrison-dempsey/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="mailto:harrisonddempsey@gmail.com">Email <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  )
}
