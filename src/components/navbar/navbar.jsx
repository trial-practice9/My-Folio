import './navbar.css'
import React from 'react';
import {MdClose, MdMenu } from 'react-icons/md';
import  TalkBtn from './talkbtn.jsx'
import { useState} from 'react';
import {NavLink} from 'react-router-dom'


function Navbar() {
   const [Menu,Cross] = useState(true)

   function ToggleMenu() {
       Cross(!Menu)
    }

  function outMenu() {
    document.getElementsByClassName       ('menubox')[0].click()
     
    window.scroll(0, 0);
  }
  
  return(
    <>
      <nav>
      <div  className='navbar'>
        <div className='name'>
        <h1 id='my'>My</h1>
        <h1 className='folio'>Folio</h1>
        </div>
    
          <ul>
            <li><NavLink to='/' className={(e)=>{return e .isActive?'active' :''}} onClick={outMenu}>Home</NavLink></li>
            <li><NavLink to='/about/' className={(e)=>{return e .isActive?'active' :''}} onClick={outMenu}>About</NavLink></li>
            <li><NavLink to='/work/' className={(e)=>{return e .isActive?'active' :''}} onClick={outMenu}>Work</NavLink></li>
            <li><NavLink to='/contact/' className={(e)=>{return e .isActive?'active' :''}} onClick={outMenu}>Contact</NavLink></li>
          </ul>
        
        <div>
          <TalkBtn/>
        </div>
        </div>
        <div className='mobilenav'>
          <div className='name2'>
            <h1 id='my'>My</h1>
 <h1 className='folio'>Folio</h1>
          </div>
         <div className='menubox' onClick={ToggleMenu}>
           
           {Menu ? <MdMenu className='menubar'/>:<MdClose className='menubar'/>}
         
         </div>
        </div>
        <div className={`menulist ${Menu ? 'out' : 'in'}`}>
          
  <NavLink to='/' className={(e)=>{return e.isActive?'active' :''}} onClick={outMenu}>Home</NavLink>
  <NavLink to='/about/' className={(e)=>{return e .isActive?'active' :''}} onClick={outMenu}>About</NavLink>
  <NavLink to='/work/' className={(e)=>{return e .isActive?'active' :''}} onClick={outMenu}>Work</NavLink>
  <NavLink to='/contact/' className={(e)=>{return e .isActive?'active' :''}} onClick={outMenu}>Contact</NavLink>
          <div>
            <TalkBtn/>
          </div>
            
         </div>
      </nav>
      
    </>
  )
}

export default Navbar
