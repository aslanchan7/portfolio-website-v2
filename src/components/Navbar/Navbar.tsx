import { useState } from "react";
import styles from "./Navbar.module.css";
import { IoArrowDown, IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <ul className={`${styles.list} ${menuOpen && styles.menuOpen}`} onClick={() => {setMenuOpen(false)}}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
            <p>Resume</p>
            <IoArrowDown className={styles.downloadIcon}/>
          </a>
        </li>
      </ul>
      <IoMenu className={styles.menuIcon} size={32} onClick={() => {setMenuOpen(!menuOpen)}}/>
    </div>
  )
}
