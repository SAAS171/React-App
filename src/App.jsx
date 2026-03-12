import './App.css';

const skills = ['React', 'Vite', 'TypeScript', 'Node.js', 'UI Systems'];

const projects = [
  {
    name: 'Northstar Commerce',
    summary: 'A storefront redesign focused on fast mobile checkouts and editorial product storytelling.',
    stack: 'React, Stripe, Sanity',
  },
  {
    name: 'Atlas Dashboard',
    summary: 'An internal analytics workspace with live metrics, alerting, and role-based workflows.',
    stack: 'Vite, Charts, Supabase',
  },
  {
    name: 'Studio Sessions',
    summary: 'A booking platform for independent creatives with calendar sync and client messaging.',
    stack: 'React, Firebase, Framer Motion',
  },
];

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Rahim builds clean interfaces and useful products.</h1>
        <p className="hero-copy">
          Frontend developer based in Pakistan, focused on responsive React experiences,
          thoughtful UI systems, and shipping work that feels polished.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View Projects</a>
          <a href="#contact" className="button button-secondary">Contact</a>
        </div>
      </section>

      <section className="panel">
        <div>
          <p className="section-label">About</p>
          <h2>Currently building portfolio sites, dashboards, and product marketing pages.</h2>
        </div>
        <p className="section-copy">
          I like sharp layouts, accessible interactions, and frontend code that stays easy to
          maintain after launch. This page uses placeholder content, so you can replace any
          section with your real work later.
        </p>
      </section>

      <section className="panel" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-label">Selected Projects</p>
            <h2>A few example builds.</h2>
          </div>
          <p className="section-copy">Swap these with your real case studies when ready.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <p className="project-stack">{project.stack}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel split-layout">
        <div>
          <p className="section-label">Stack</p>
          <h2>Tools I use to turn ideas into shipped products.</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="panel contact-panel" id="contact">
        <div>
          <p className="section-label">Contact</p>
          <h2>Open to freelance work and full-time frontend roles.</h2>
        </div>
        <div className="contact-copy">
          <p>Email: hello@rahim.dev</p>
          <p>LinkedIn: linkedin.com/in/rahim-dev</p>
          <p>GitHub: github.com/rahim-dev</p>
        </div>
      </section>
    </main>
  );
}

export default App;
