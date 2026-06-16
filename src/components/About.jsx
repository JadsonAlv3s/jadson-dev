export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about-inner">
        <img
          src="/jadson-foto.jpg"
          alt="Foto de Jadson Alves"
          className="about-photo"
          width="320"
          height="480"
          loading="lazy"
        />
        <div className="about-text">
          <h2>Sobre mim</h2>
          <p>
            Sou estudante de Tecnologia em Sistemas para Internet no IFRN, com
            experiência prévia em ambientes de segurança e processos
            financeiros — hoje aplicada à disciplina e atenção a detalhes no
            desenvolvimento de software.
          </p>
          <p>
            Desenvolvo aplicações web e desktop com foco em acessibilidade e
            usabilidade, sempre buscando transformar uma ideia ou estratégia já
            definida em algo funcional e bem-acabado. Também aplico engenharia
            de software com IA para acelerar e elevar a qualidade do que entrego.
          </p>
          <div className="about-badges">
            <span>Python</span>
            <span>Java</span>
            <span>React</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>AWS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
