import styles from './contact.module.css'
import { MdOutlineMail } from 'react-icons/md';
import { FaInstagram ,FaGithub ,FaLinkedin} 
 from 'react-icons/fa';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import designImg from '../../assets/design.png'
function ContactPage() {

 const instaOpen = () =>{

   window.open('https://www.instagram.com/__programmer__code.hack__?igsh=MTFrbXUxaWc1dHZ1bQ==', '_blank', 'noopener,noreferrer');
    
  }

  const githubOpen = () =>{

   window.open('https://github.com/code-web-world?fbclid=PAZXh0bgNhZW0CMTEAAab6C2xYRdPZxqo4cp8C2fMKWhPNfRbjqwebN95zH74A2L50uuKiPUrUmDY_aem_AT4TK9i2c6ZwiglSPkOuolON9zc_U6h94fXfEuuOAvHQ93vTgklo7pe38z2aA7M6T16gZGWZYFeZ6wEzrLExa8Xn', '_blank', 'noopener,noreferrer');
    
  }



  const form = useRef();
  
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_futuk9k', 'template_vxrui2f', form.current, 'mbV-e_N4CPxyiYqIK')
      .then((result) => {
    console.log(result.text,'6');
    form.current.reset()
    alert('Message Sent Successfully, I will get back to you soon')
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
      <div className={styles['container']}>
        
      <div className={styles['form']}>
        <img src={designImg} className='design-img'/>
        <div className={styles['text']}><h1>Let's Work</h1><h1 className='h3'>Together</h1>
        </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='name' placeholder='Name' name='name'/>
        <input type='email' placeholder='Email' name='email'/>
        <input type='name' placeholder='Subject' name='subject'/>
        <textarea placeholder='Your Message' name='message'></textarea>
        <button className={styles['send-btn']}>Send Message</button>
      </form>
      </div>
        <div className={styles['contact-info']}>
          
    <h3>MY EMAIL</h3>
          <div className={styles['info']}>
            
          
             <div className={styles['contact-icon']}><MdOutlineMail className={styles['icon']}/>
              </div>
        <div className={styles['email']}>
        <p>MAIL TO</p>
        <a href='raunakdev77@gmail.com'>raunakdev77@gmail.com</a>
          <a href='raunakdev77@gmail.com'>raunakdev77@gmail.com</a>
        </div>
           </div><br/><br/>
<h3>MY SOCIAL INFO</h3>
<div className={styles['social-info']}>
  
  
  <div className={styles['Sicons']}><FaInstagram className={styles['Sicon']} onClick={instaOpen}/></div>
      <div className={styles['Sicons']}><FaGithub className={styles['Sicon']} onClick={githubOpen}/></div>
      <div className={styles['Sicons']}><FaLinkedin className={styles['Sicon']}/>
  </div>
    
</div>
       


              
          
           
            
          
          
        
      
      </div>
      </div>
    </>
  )
}

export default ContactPage
