import styles from './Home.module.css'
import { About } from '../../components/About/About'
import { Contact } from '../../components/Contact/Contact'
import { Landing } from '../../components/Home/Landing'
import { Navbar } from '../../components/Navbar/Navbar'
import { Projects } from '../../components/Projects/Projects'

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
