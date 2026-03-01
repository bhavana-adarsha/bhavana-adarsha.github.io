import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App