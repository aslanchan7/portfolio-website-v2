import styles from "./AllProjects.module.css"
import { IoChevronBack, IoChevronForward, IoPeople, IoTime } from "react-icons/io5"
import projects from "../data/all-projects.json"
import { Contact } from "../components/Contact/Contact"

export const AllProjects = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <a className={styles.backButton} href="/">
          <IoChevronBack size={32} />
          <p>Go Back</p>
        </a>

        <h1 className={styles.title}>
          All Projects
        </h1>

        <div className={styles.projectsContainer}>
          {projects.map((project, id) => {
            return (
              <div key={id} className={styles.projectCard}>
                <img src={`/assets/Projects/${project.imageSrc}`} />
                  <div className={styles.briefInfo}>
                    <IoPeople className={styles.teamSizeIcon} />
                    <p>{project.teamSize}</p>
                    <IoTime className={styles.timeIcon} />
                    <p>{project.time}</p>
                  </div>

                <div className={styles.projectTitleContainer}>
                  <h2 className={styles.projectTitle}>
                    {project.title}
                  </h2>

                  <IoChevronForward className={styles.chevronForwardIcon} size={24}/>
                </div>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.skillsContainer}>
                  {project.skills.map((skill, id) => {
                    return <div key={id} className={styles.skillCard}>
                        <p>{skill}</p>
                      </div>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Contact />
    </div>
  )
}
