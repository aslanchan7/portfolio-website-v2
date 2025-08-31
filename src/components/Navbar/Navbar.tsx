import styles from "./Navbar.module.css";
import { IoArrowDown } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
            <p>Resume</p>
            {/* <img src="/assets/Navbar/download-icon-white.svg" className={styles.downloadIcon}/> */}
            <IoArrowDown className={styles.downloadIcon}/>
          </a>
        </li>
      </ul>
    </div>
  )
}
