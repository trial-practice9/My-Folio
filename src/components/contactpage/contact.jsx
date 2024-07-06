import styles from './contact.module.css'
import { MdOutlineMail } from 'react-icons/md';
import { FaInstagram ,FaGithub ,FaLinkedin} 
 from 'react-icons/fa';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import designImg from '../../assets/design.png'
function ContactPage() {



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
  
  
  <div className={styles['Sicons']}><FaInstagram className={styles['Sicon']}/></div>
      <div className={styles['Sicons']}><FaGithub className={styles['Sicon']}/></div>
      <div className={styles['Sicons']}><FaLinkedin className={styles['Sicon']}/>
  </div>
    
</div>
       


              
          
           
            
          
          
        
      
      </div>
      </div>
    </>
  )
}

export default ContactPage
