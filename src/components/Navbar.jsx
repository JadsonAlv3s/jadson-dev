export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Navegação principal">
        <a href="#hero" className="navbar-logo">
          Jadson<span>.dev</span>
        </a>
        <ul className="navbar-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contato" className="navbar-cta">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
