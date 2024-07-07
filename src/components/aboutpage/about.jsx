import styles from './about.module.css'
import './about.css'
import TalkBox from '../others/talkbox.jsx'
import About from '../others/about.jsx'
import {FaGithub} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
import profileImg from '../../assets/profilepic.jpg'
function AboutPage(){

  const navigate = useNavigate()
  
  const moreabout = () => {
    navigate('/credentials/')
    window.scroll(0, 0);
  }

  const contact = () => {
    navigate('/contact/')
    window.scroll(0, 0);
  }
  
  const githubOpen = () =>{

   window.open('https://github.com/code-web-world?fbclid=PAZXh0bgNhZW0CMTEAAab6C2xYRdPZxqo4cp8C2fMKWhPNfRbjqwebN95zH74A2L50uuKiPUrUmDY_aem_AT4TK9i2c6ZwiglSPkOuolON9zc_U6h94fXfEuuOAvHQ93vTgklo7pe38z2aA7M6T16gZGWZYFeZ6wEzrLExa8Xn', '_blank', 'noopener,noreferrer');
    
  }
  return(
    <>
      <div className={styles['container']}>
        <div className={styles['first-row']}>
        <div className={`${styles['box1']} common` }>
          <img src={profileImg} />
        </div>
          
        <div className={`${styles['box2']} comon` }>
        <h1>MY-SUMMARY</h1>
      <div className={`${styles['bo2']} common` }>

          <p>I Am Raunak 🧒, A Dedicated and Passionate Web Developer 💻 With A Strong Background In Creating Visually Appealing, Highly Functional Websites And Web Applications With 2 Years Of Experience, I Have Developed A Keen Eye For Detail And A Deep Understanding Of Both Front-end And Back-end Technologies And I Don't Like To Be A Specific Language,I Love Working In Different Languages And Exploring New</p></div>
        </div>
        
        </div>
        
        <div className={styles['mid-row']}>
          <div className={`${styles['box3']} common`}>
       <h3>EDUCATION</h3>  
<h4>Self-Taught Programmer</h4>
        <ul>
   <li>Learned through various YouTube courses and tutorials.
</li> 
    <li>Studied from different educational websites
</li>
    <li>Referenced official documentation of technologies</li>
    <li>Read several books on web development and programming</li>
          </ul>
        
          </div>
        <div className={`${styles['box4']} common` }>
        <h3>EXPERIENCE</h3>
        <h4>Frontend Development / Web Designing</h4>
        <ul>
          <li>2021 - Continue...</li> 
          </ul>
        <h4>Backend Web Development</h4>
          <ul>
            <li>2022 - Continue...</li> </ul>
    <h4>Overall In Full Stack Web Development</h4>   
        <ul>
          <li>2+ Years Of Experience</li>
        </ul>
        </div></div>
        
        <div className={styles['last-row']}>
          <div className={`${styles['box5']} common` }>
          <div className='social-icons' onClick={githubOpen}>
        <FaGithub className='icon'/>
        <p>My Projects Here</p>
      </div>
          </div>
          <div className={`${styles['box6']} common` } onClick={contact}><TalkBox/></div>
          <div className={`${styles['box7']} common` } onClick={moreabout}><About/></div>
        </div>
       
       
      </div>
    </>
  )
}

export default AboutPage
