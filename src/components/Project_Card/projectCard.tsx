import { IoChevronForward, IoPeople, IoTime } from "react-icons/io5";
import styles from "./projectCard.module.css";
import { useEffect, useRef } from "react";

type ProjectCardProps = {
  slug: string;
  teamSize: string;
  time: string;
  title: string;
  description: string;
  skills: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    vidRef.current?.pause();
  }, [vidRef])

  const handleMouseEnter = () => {
    vidRef.current?.play();
  }

  const handleMouseLeave = () => {
    vidRef.current?.pause();
  }

  return (
    <a className={styles.projectCard} href={`${props.slug}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video ref={vidRef} autoPlay loop muted playsInline>
        <source src={`/public/Project_Details/${props.slug}/${props.slug}.webm`}/>
      </video>

        <div className={styles.briefInfo}>
          <IoPeople className={styles.teamSizeIcon} />
          <p>{props.teamSize}</p>
          <IoTime className={styles.timeIcon} />
          <p>{props.time}</p>
        </div>

      <div className={styles.projectTitleContainer}>
        <h2 className={styles.projectTitle}>
          {props.title}
        </h2>

        <IoChevronForward className={styles.chevronForwardIcon} size={24}/>
      </div>

      <p className={styles.projectDescription}>
        {props.description}
      </p>

      <div className={styles.skillsContainer}>
        {props.skills.map((skill, id) => {
          return <div key={id} className={styles.skillCard}>
              <p>{skill}</p>
            </div>
        })}
      </div>
    </a>  
  )
}
