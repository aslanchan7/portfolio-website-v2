import styles from './App.module.css'
import { About } from './components/About/About'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}

export default App
