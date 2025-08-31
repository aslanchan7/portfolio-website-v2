import styles from "./Home.module.css";

export const Home = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heroSection}>
          <div className={styles.heroInfo}>
            <h1 className={styles.title}>
              Hi, I'm Aslan!
            </h1>

            <h2 className={styles.subtitle}>
              Game Developer | Frontend Developer
            </h2>
            
            <div className={styles.buttons}>
              <div className={styles.featuredWorkBtn}>
                <a>
                  See Featured Work
                </a>
              </div>
              
              <div className={styles.allProjectsBtn}>
                <a>
                  Browse All Projects
                </a>
              </div>
            </div>
          </div>

          <img className={styles.avatar} src="/assets/Home/avatar-pic.jpg"/>
        </div>

        <p className={styles.blurb}>
          Welcome to my portfolio website! Below you can read some information about me as well as find all of my projects! Feel free to reach out via email as that is the fastest way to reach me.
        </p>

      </div>
    </section>
  )
}
