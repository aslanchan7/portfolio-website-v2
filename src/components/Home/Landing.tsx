import styles from "./Landing.module.css";

export const Landing = () => {
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
              <a href="#projects" className={styles.featuredWorkBtn}>
                See Featured Work
              </a>
              
              <a href="/projects" className={styles.allProjectsBtn}>
                Browse All Projects
              </a>
            </div>
          </div>

          <img className={styles.avatar} src="/public/Home/avatar-pic.webp"/>
        </div>

        <p className={styles.blurb}>
          Welcome to my portfolio website! Below you can read some information about me as well as find all of my projects! Feel free to reach out via email as that is the fastest way to reach me.
        </p>

      </div>
    </section>
  )
}
