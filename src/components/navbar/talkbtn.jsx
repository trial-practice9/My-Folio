import React,{ useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function TalkBtn() {
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    
    document.documentElement.setAttribute('theme', theme);
  }, [theme]);

  
  const toggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('theme', newTheme);
  };

  const btnText = theme === 'dark' 
    ? <>Dark Mode <FaMoon /></>
    : <>Light Mode <FaSun /></>;

  return (
    <button className='talk' onClick={toggle}>{btnText}</button>
  );
}

export default TalkBtn;
