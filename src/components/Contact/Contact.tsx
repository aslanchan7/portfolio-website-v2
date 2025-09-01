import styles from "./Contact.module.css"
import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <a className={styles.mailButton} href="mailto:aslanchan7@gmail.com">
        <IoMail size={24}/>
        <p>SEND ME AN EMAIL</p>
      </a>

      <div className={styles.separationLine}>
        <div className={styles.line}/>
        <p>
          YOU CAN ALSO FIND ME ON
        </p>
        <div className={styles.line}/>
      </div>

      <div className={styles.contactIconsContainer}>
        <a href="https://github.com/aslanchan7">
          <IoLogoGithub className={styles.contactIcon} size={32} />
        </a>

        <a href="https://www.linkedin.com/in/aslan-chan-09527b297/">
          <IoLogoLinkedin className={styles.contactIcon} size={32} />
        </a>
      </div>
    </section>
  )
}
