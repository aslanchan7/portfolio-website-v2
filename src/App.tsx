import styles from './App.module.css'
import { Home } from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
