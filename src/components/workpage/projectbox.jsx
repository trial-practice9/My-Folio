import styles from './work.module.css'
import './work.css'
import { FaGithub ,FaProjectDiagram} from 'react-icons/fa'
  
function ProjectBox(props) {

  const githubrepo = () =>{

   window.open(props.repoLink, '_blank', 'noopener,noreferrer');
    
  }

  const project = () =>{

   window.open(props.projectLink, '_blank', 'noopener,noreferrer');
    
  }
  
  return(
    <div className={styles['project-box']}>
      <div className={styles['img-box']}><img src={props.imgUrl}/>
      
      </div>
      <h3>{props.projectName}</h3>
      <div className={styles['tech-stack']}>
        {props.children}
      </div>
    <div className={styles['link-box']}>
      <div><FaGithub className={styles['icon']} onClick={githubrepo}/></div>
      <div><FaProjectDiagram className={styles['icon']} onClick={project}/></div>
    </div>
    </div>
  )
}

export default ProjectBox