import './aboutbox.css'
import signImg from '../../assets/sign.png'
import arrow from '../../assets/arrow.svg'
function About() {
  return(
    <>
    <div className='about-img'>
  <img src={signImg}/>
    </div>
      
    <div className='about-text'>
          <p>MORE ABOUT ME</p>
          <h4>Credentials</h4>
          <span className='arrow-img'><img src={arrow} /></span>
          </div>
    </>

  )
}

export default About