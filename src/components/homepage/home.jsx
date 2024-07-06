import './home.css'
import {useNavigate} from 'react-router-dom'
import About from '../others/about.jsx'
import Icons from '../others/icon.jsx'
import TalkBox from '../others/talkbox.jsx'
import { FaInstagram ,FaGithub} from 'react-icons/fa';
import profileImg from '../../assets/profilepic.jpg'
import arrow from '../../assets/arrow.svg'
import workImg from '../../assets/work.png'


function HomePage(){
  const instaOpen = () =>{

   window.open('https://www.instagram.com/__programmer__code.hack__?igsh=MTFrbXUxaWc1dHZ1bQ==', '_blank', 'noopener,noreferrer');
    
  }

  const githubOpen = () =>{

   window.open('https://github.com/code-web-world?fbclid=PAZXh0bgNhZW0CMTEAAab6C2xYRdPZxqo4cp8C2fMKWhPNfRbjqwebN95zH74A2L50uuKiPUrUmDY_aem_AT4TK9i2c6ZwiglSPkOuolON9zc_U6h94fXfEuuOAvHQ93vTgklo7pe38z2aA7M6T16gZGWZYFeZ6wEzrLExa8Xn', '_blank', 'noopener,noreferrer');
    
  }
  const navigate = useNavigate()
  
  const about = () => {
    navigate('/about/')
    window.scroll(0, 0);
    }

  const project = () => {
    navigate('/work/')
    window.scroll(0, 0);
  }

  const moreabout = () => {
    navigate('/credentials/')
    window.scroll(0, 0);
  }

  const contact = () => {
    navigate('/contact/')
    window.scroll(0, 0);
  }



  return(
    <>
    <div className='maincontainer'>
      
      
   <div className='content myself shadow' onClick={about}>
    <div className='image myself-item'>
      
      <img src={profileImg} id='profile-image'/>
    </div>
    <div className='introduction myself-item'>
      <p>A WEB DEVELOPER</p>
      <h3>Myself</h3>
      <h2>Raunak</h2>
      <p>This Is My Portfolio To Show All Detail , Works And Skill </p>
      <span className='arrow-img'><img src={arrow} /></span>
    </div>
     
    </div>
      <div className='content box2'>
      <marquee className='shadow'>Latest <p>Works</p> And <p>Features</p></marquee>

      <div className='about-work'>
      <div className='about box2-item shadow' onClick={moreabout}>
      <About/>
      </div>
        <div className='box2-item work shadow' onClick={project}>
      <div className='work-img'>
          <img src={workImg} />
          </div>
          <div className='work-text'>
          <p>SHOWCASE</p>
          <h4>My Works</h4>
          <span className='arrow-img'><img src={arrow} /></span>
          </div>
      
        </div>
      </div>
        
      </div>
      <div className='content box3 shadow'>
      <div className='social-icons' onClick={instaOpen}>
        <FaInstagram className='icon'/>
        <p>My Instagram</p>
      </div>
      </div>
      
    <div className='box4-item1 shadow'>
    <Icons/>
    
    <h4>Technologies and Tools I Like Most</h4>
    </div>
    <div className='box4-item2 shadow'>
      <div className='social-icons' onClick={githubOpen}>
        <FaGithub className='icon'/>
        <p>My GitHub</p>
      </div>
    
    </div>
     
      <div className='content box5 shadow'>
      <div className='year-exp'>
        <h1>
         2+
        </h1>
        <p>Years Experience</p>
      </div>
        <div className='year-exp'>
        <h1>
         30+
        </h1>
        <p>Total Projects</p>
          
      </div>
      </div>
      <div className='content box6 shadow' onClick={contact}>
      <TalkBox/></div>
      
    </div>
      
      </>
  )
}

export default HomePage