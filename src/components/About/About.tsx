import styles from "./About.module.css"

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.aboutMeContainer}>
        <h1 className={styles.title}>
          About Me
        </h1>

        <p>
          Hi, I'm Aslan, a game developer passionate about transforming concepts into <span>engaging and polished experiences</span>. 
          More recently, I've been exploring mobile app and web development, 
          focusing on crafting polished user experiences through thoughtful design and intuitive flow.
        </p>

        <p>
          Through personal projects, I've built a strong foundation in <span>Git, Unity, C#, React and React Native</span>. 
          As President of the Video Game Development Club at UCSD, I gained experience leading teams of different sizes, organizing events, mentoring peers and fostering community. 
          That role also helped me realize that I thrive most, and in fact, much prefer working in <span>collaborative settings</span>.
        </p>

        <p>
          I'm always excited to keep <span>learning and experimenting</span> with new technologies, whether in games, apps, or web projects. 
          Currently, I'm exploring Unity's new UI system by recreating interfaces from some of my favorite indie and AAA titles, 
          honing my understanding of design and usability.
        </p>
        
        <div className={`${styles.polaroid} ${styles.topLeft}`}>
          <img src="/About/about-image-1.webp"/>
        </div>
 
        <div className={`${styles.polaroid} ${styles.bottomLeft}`}>
          <img src="/About/about-image-2.webp"/>
        </div>

        <div className={`${styles.polaroid} ${styles.topRight}`}>
          <img src="/About/about-image-3.webp"/>
        </div>

        <div className={`${styles.polaroid} ${styles.bottomRight}`}>
          <img src="/About/about-image-4.webp"/>
        </div>

      </div>      
    </section>
  )
}
