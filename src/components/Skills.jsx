const skillGroups = [
  { title: 'Linguagens', items: ['Python', 'Java', 'JavaScript / TypeScript'] },
  { title: 'Web', items: ['React', 'FastAPI', 'HTML5', 'CSS3'] },
  { title: 'Dados & Infra', items: ['PostgreSQL', 'Docker', 'AWS (em progresso)'] },
  { title: 'Ferramentas', items: ['Git', 'GitHub', 'VS Code'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
