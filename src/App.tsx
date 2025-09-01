import styles from './App.module.css'
import { About } from './components/About/About'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
