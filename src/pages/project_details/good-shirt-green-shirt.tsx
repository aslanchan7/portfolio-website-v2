import { IoChevronBack } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa"
import styles from "./project-details.module.css"
import { useNavigate } from "react-router-dom";
import project from "../../data/project_details/good-shirt-green-shirt.json";
import ReactMarkdown from "react-markdown"

export const GoodShirtGreenShirt = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <a className={styles.backButton} onClick={() => navigate(-1)}>
        <IoChevronBack size={32} />
        <p>Go Back</p>
      </a>

      <div className={styles.content}>
        <video autoPlay loop muted playsInline className={styles.demoVid}>
          <source src={`/public/Project_Details/${project.slug}/${project.slug}.webm`}/>
        </video>

        <h1 className={styles.title}>
          {project.title}
        </h1>
      
        <div className={styles.projectDetailsContainer}>
          <h2>Project Info</h2>
          <div className={styles.projectInfoContainer}>
            <div className={styles.projectInfoBox}>
              <h3>Team Size</h3>
              <h4>{project.projectInfo.teamSize}</h4>
            </div>

            <div className={styles.projectInfoBox}>
              <h3>Time Frame</h3>
              <h4>{project.projectInfo.timeFrame}</h4>
            </div>

            <div className={styles.projectInfoBox}>
              <h3>Technologies</h3>
              <h4>{project.projectInfo.technologies.join(", ")}</h4>
            </div>

            <a className={styles.redirectButton} href={`${project.projectInfo.redirectLink}`} target="_blank">
              <h3>Link to Project</h3>
              <FaExternalLinkAlt size={18} className={styles.redirectIcon}/>
            </a>
          </div>

          <h2>Introduction</h2>
          {project.introduction.map((paragraph, id) => {
            return <ReactMarkdown key={id}>{paragraph}</ReactMarkdown>
          })}

          {project.details[0].sectionTitle !== "" && project.details.map((section, id) => {
            return (
              <div key={id}>
                <h2>{section.sectionTitle}</h2>
                {section.sectionAttachment1 !== "" && 
                  <div className={styles.sectionAttachments}>
                    {section.sectionAttachment1.endsWith(".webp") 
                      ? <img src={`/public/Project_Details/${project.slug}/${section.sectionAttachment1}`}/>
                      : (<video autoPlay muted loop playsInline> <source src={`/public/Project_Details/${project.slug}/${section.sectionAttachment1}`} /> </video>)
                    }
                    {section.sectionAttachment2 !== ""
                      ? section.sectionAttachment2.endsWith("webp")
                        ? <img src={`/public/Project_Details/${project.slug}/${section.sectionAttachment2}`}/>
                        : (<video autoPlay muted loop playsInline> <source src={`/public/Project_Details/${project.slug}/${section.sectionAttachment2}`} /> </video>)
                      : null
                    }
                  </div>
                }
                {section.content.map((paragraph, id) => {
                    return <ReactMarkdown key={id}>{paragraph}</ReactMarkdown>
                })}
              </div>
            )
          })}

          <h2>What I've Learned</h2>
          {project.learned.map((paragraph, id) => {
            return <ReactMarkdown key={id}>{paragraph}</ReactMarkdown>
          })}

        </div>
      </div>
    </div>
  )
}
