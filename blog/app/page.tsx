const experience = [
  {
    years: '2022 — present',
    company: 'Grubhub / Wonder',
    role: 'Senior Software Engineer',
    description:
      'Building and maintaining Java backend software, with a focus on AI-integrated engineering.',
  },
  {
    years: '2020 — 2021',
    company: 'Amazon',
    role: '',
    description: '',
  },
]

export default function Page() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> NYC BASED / OPEN TO CONNECT</p>
          <h1 id="hero-title">Harrison<br /><span>Dempsey</span></h1>
          <div className="current-role">
            <span className="current-role-label">CURRENT ROLE</span>
            <p>Senior Software Engineer at <span className="grubhub-name">Grubhub</span><span className="role-divider"> / </span><span className="wonder-name">Wonder</span></p>
          </div>
          <p className="hero-summary">
            I build dependable backend software and bring AI into practical engineering work.
            Based in New York City.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#portfolio">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="mailto:harrisonddempsey@gmail.com">Get in touch <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src="/harrison-headshot.jpg" alt="Portrait of Harrison Dempsey" width="1254" height="1254" />
          <span className="portrait-label" aria-hidden="true">HARRISON / NYC</span>
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <span className="section-index">01 / ABOUT</span>
          <h2 id="about-title">Engineering with<br /><em>purpose</em></h2>
        </div>
        <div className="about-content">
          <p className="lead">
            I’m a New York City based software engineer focused on backend systems and
            thoughtful applications of AI.
          </p>
          <p>
            Since 2022, I’ve worked at Grubhub, now part of Wonder, writing and maintaining
            production Java software. Before that, I worked at Amazon. I graduated from the
            University of Michigan, Ann Arbor in 2020 with a Bachelor of Science in Engineering
            in Computer Science.
          </p>
          <div className="focus-tags" aria-label="Areas of focus">
            <span>Backend engineering</span><span>Java</span><span>AI integration</span>
          </div>
        </div>
      </section>

      <section className="section experience-section" aria-labelledby="experience-title">
        <div className="section-heading compact-heading">
          <span className="section-index">THE PATH SO FAR</span>
          <h2 id="experience-title">Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <div className="experience-item" key={item.company}>
              <span className="experience-years">{item.years}</span>
              <div>
                <h3>{item.company}</h3>
                {item.role && <p className="experience-role">{item.role}</p>}
                {item.description && <p className="experience-description">{item.description}</p>}
              </div>
              <span className="experience-marker" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section portfolio-section" id="portfolio" aria-label="Portfolio">
        <span className="section-index">02 / PORTFOLIO</span>
        <div className="project-grid">
          {[1, 2].map((number) => (
            <article className="project-card" key={number}>
              <div className="project-topline"><span>PROJECT / 0{number}</span><span className="project-star" aria-hidden="true">✳</span></div>
              <div className="project-symbol" aria-hidden="true">{number === 1 ? '◇' : '⌘'}</div>
              <div className="project-bottomline">
                <div><h3>Coming soon</h3><p>A new case study is in the works.</p></div>
                <span className="project-status">IN PROGRESS</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <span className="section-index">03 / CONTACT</span>
        <div className="contact-content">
          <div>
            <h2 id="contact-title">Let’s build<br /><em>something great together</em></h2>
            <p>Have an idea, a question, or just want to say hello? My inbox is open.</p>
          </div>
          <a className="contact-arrow" href="mailto:harrisonddempsey@gmail.com" aria-label="Email Harrison Dempsey">↗</a>
        </div>
        <a className="email-link" href="mailto:harrisonddempsey@gmail.com">harrisonddempsey@gmail.com</a>
        <a className="linkedin-cta" href="https://www.linkedin.com/in/harrison-dempsey/" target="_blank" rel="noopener noreferrer">
          <span className="linkedin-glyph" aria-hidden="true">in</span>
          Connect with me on LinkedIn
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  )
}
