import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import { IoPeople, IoTime, IoChevronForward } from "react-icons/io5"

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.title}>
        Projects
      </h1>

      <div className={styles.projectsContainer}>
        {projects.map((project, id) => {
          return (
            <a key={id} className={styles.projectCard} href={`${project.slug}`}>
              <video autoPlay loop muted playsInline>
                <source src={`/assets/Project_Details/${project.slug}/${project.slug}.webm`}/>
              </video>

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
            </a>
          )
        })}

      </div>

      <a href="/projects" className={styles.allProjectsBtn}>
        Browse All Projects
      </a>
    </section>
  )
}
