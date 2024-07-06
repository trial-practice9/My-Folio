import styles from './credentials.module.css'
import { FaInstagram ,FaGithub ,FaLinkedin} 
 from 'react-icons/fa';
import profileImg from '../../assets/profilepic.jpg'
import {useNavigate} from 'react-router-dom'

function MoreAbout() {

    const instaOpen = () =>{

   window.open('https://www.instagram.com/__programmer__code.hack__?igsh=MTFrbXUxaWc1dHZ1bQ==', '_blank', 'noopener,noreferrer');
    
  }

  const githubOpen = () =>{

   window.open('https://github.com/code-web-world?fbclid=PAZXh0bgNhZW0CMTEAAab6C2xYRdPZxqo4cp8C2fMKWhPNfRbjqwebN95zH74A2L50uuKiPUrUmDY_aem_AT4TK9i2c6ZwiglSPkOuolON9zc_U6h94fXfEuuOAvHQ93vTgklo7pe38z2aA7M6T16gZGWZYFeZ6wEzrLExa8Xn', '_blank', 'noopener,noreferrer');
    
  }

  const navigate = useNavigate()
  
  const contact = () => {
    navigate('/contact/')
    window.scroll(0, 0);
  }


  return (
    <>
      <div className={styles['container']}>
      <div className={styles['detail']}>
        <div className={`${styles['detail-card']} common` }>
      <div className={styles['avatar-pic']}>
      <img src={profileImg} />
    
      </div>
    <h1>Raunak</h1>
    <p>@raunak</p>
    <div className={styles['social-icons']}>
      <div className={styles['icons']}><FaInstagram className={styles['icon']} onClick={instaOpen}/></div>
      <div className={styles['icons']}><FaGithub className={styles['icon']} onClick={githubOpen}/></div>
      <div className={styles['icons']}><FaLinkedin className={styles['icon']}/></div>
    
    </div>
          
          <button className={styles['contact-btn']} onClick={contact}>Contact Me</button>
          
          
      </div>
        </div>
      <div className={styles['about-box']}>
      <h2>ABOUT ME</h2>
        <p>I Am Raunak 🧒, A Dedicated and Passionate Web Developer 💻 With A Strong Background In Creating Visually Appealing, Highly Functional Websites And Web Applications ✨🚀 With 2 Years Of Experience With My Personal Project, I Have Developed A Keen Eye For Detail And A Deep Understanding Of Both Front-end And Back-end Technologies And I Use HTML , CSS AND JavaScript/ReactJS For Frontend And Django And Flask For Backend.🚀✨</p>
<br/>
    <h2>EXPERIENCE</h2>
  <h4 className={styles['highlisht']}>Frontend Development / Web Designing 
            </h4> 
     <ul>
       
      <li>
    <b>Summary:</b>
       Over 2 years of experience in designing and developing user-friendly and responsive web interfaces.
      </li>
       <li>
    <b>Technologies:</b>
       HTML, CSS, JavaScript, React, BootStrap , Ajax , JQuery, ChartsJs.
      </li>
      <li><b>Projects:</b></li>
       <ul>
      <li>
Developed a responsive Portfolio  Website with React and Bootstrap.
</li>
    <li>Designed an interactive Service Website using HTML, CSS, and JavaScript.</li>
      </ul>
      </ul>
        
        

        <h4 className={styles['highlisht']}>Backend Web Development 
            </h4> 
     <ul>
       
      <li>
    <b>Summary:</b>
       Over 2 year of experience in building robust backend systems and APIs.
      </li>
       <li>
    <b>Technologies:</b>
         Django, Flask,SQL lite, MySQL
      </li>
      <li><b>Projects:</b></li>
       <ul>
      <li>
Created a RESTful API  using Django and Django Rest Framework.
</li>
    <li>Implemented user authentication and data management for a Social media project </li>
      </ul>
      </ul>
          <h4 className={styles['highlisht']}>Full Stack Web Development 
            </h4> 
     <ul>
       
      <li>
    <b>Summary:</b>
       Comprehensive experience in full stack web development, encompassing both frontend and backend technologies
      </li>
       <li>
    <b>Technologies:</b>
       Full stack development using React , Django , Flask , SQL lite.
      </li>
      <li><b>Projects:</b></li>
       <ul>
      <li>
Built a django application for a Student management system.
</li>
    <li>Developed a Social  Media platform with dynamic content rendering and user authentication.</li>
      </ul>
      </ul>
        
        

        <br/>
        <h2>EDUCATION</h2>
        <h4 className={styles['highlisht']}>Self-Taught Programmer From
            </h4>
            <ul>
 <li>YouTube Videoes or Cources</li>
        <li>Google</li>
        <li>FreeCodeCamp</li>
        <li>Codecademy</li>
        <li>Official Documentation of Technologies</li>
        <li>W3 School</li>
        <li>Books</li>
      </ul>
      <p className={styles['highlisht']}>These Are Some Platforms Which Helped In Making My Skills Efficient</p>
        <br/>
        <h2>SOFT SKILL</h2>
        <ul>
          <li>Problem solving</li>
          <li>Adaptility</li>
          <li>Ability to learn quickly</li>
          <li>Critical thinking</li>
        
        </ul>
        <br/>
        <h2>SKILLS</h2>
        <ul>
           <li>HTML</li>
           <li>CSS</li>
           <li>JavaScript</li>
           <li>ReactJS</li>
           <li>BootStrap</li>
           <li>Python</li>
           <li>Django</li>
           <li>Flask</li>
           <li>SQL</li>
           <li>Git/GitHub</li>
        </ul>

        <br/>
        
      </div>
      </div>
      <br/><br/><br/>
    </>
  )
}

export default MoreAbout