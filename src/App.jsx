import { LayoutGroup } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
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
import SectionDivider from './components/SectionDivider'


export default function App() {
  const { isDark } = useTheme()

  return (
    <LayoutGroup>
      <main
        style={{
          minHeight: '100vh',
          backgroundColor: 'var(--bg)',
          color: 'var(--fg)',
          transition: 'background-color 0.35s ease, color 0.35s ease',
        }}
      >
        <Navbar />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Research />
        <SectionDivider />
        <Education />
        <Certifications />
        <SectionDivider />
        <Languages />
        <SectionDivider />
        <Contact />
      </main>
    </LayoutGroup>
  )
}