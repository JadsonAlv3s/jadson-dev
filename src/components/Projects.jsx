import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.id}>
              <p className="project-tag">{p.tag}</p>
              <h3>{p.name}</h3>
              <p className="project-description">{p.description}</p>
              <ul className="project-stack" aria-label={`Tecnologias usadas em ${p.name}`}>
                {p.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {p.linkLabel} →
                </a>
              ) : (
                <span className="project-link project-link-disabled">{p.linkLabel}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
