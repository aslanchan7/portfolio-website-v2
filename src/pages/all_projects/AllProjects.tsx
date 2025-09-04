import styles from "./AllProjects.module.css"
import { IoChevronBack } from "react-icons/io5"
import projects from "../../data/all-projects.json"
import { Contact } from "../../components/Contact/Contact"
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../../components/Project_Card/projectCard";

export const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <a className={styles.backButton} onClick={() => navigate(-1)}>
          <IoChevronBack size={32} />
          <p>Go Back</p>
        </a>

        <h1 className={styles.title}>
          All Projects
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
      </div>

      <Contact />
    </div>
  )
}
