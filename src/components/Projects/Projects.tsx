import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import { ProjectCard } from "../Project_Card/projectCard"
import { Link } from "react-router-dom"

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.title}>
        Projects
      </h1>

      <div className={styles.projectsContainer}>
        {projects.map((project, id) => {
          return (
            <ProjectCard 
              key={id}
              slug={project.slug} 
              teamSize={project.teamSize} 
              time={project.time} 
              title={project.title} 
              description={project.description} 
              skills={project.skills} 
            />
          )
        })}

      </div>

      <Link to="/projects" className={styles.allProjectsBtn}>
        Browse All Projects
      </Link>
    </section>
  )
}
