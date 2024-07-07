import {useNavigate} from 'react-router-dom'
import styles from './notFound.module.css'
function NotFound() {

  const navigate = useNavigate()
  
  const home = () => {
    navigate('/')
    window.scroll(0, 0);
  }
  return (
    <div className={styles['content']}>
            <h2 className={styles['header']} data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist.
            </p>
            <div className={styles['btns']}>
               <button onClick={home}>RETURN HOME</button>
               
            </div>
         </div>
      

  )
}

export default NotFound