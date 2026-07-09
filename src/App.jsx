import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import LaserHero from './components/LaserHero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <LaserHero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App
