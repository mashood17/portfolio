import { LayoutGroup } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Research from './sections/Research'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Languages from './sections/Languages'
import Contact from './sections/Contact'
import { ThemeProvider } from "./context/ThemeContext";


export default function App() {
    return (
      <LayoutGroup>
        <main className="bg-bg min-h-screen text-white">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Research />
          <Education />
          <Certifications />
          <Languages />
          <Contact />
        </main>
      </LayoutGroup>
  )
}