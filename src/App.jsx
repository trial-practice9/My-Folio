import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import HomePage from './components/homepage/home.jsx'
import AboutPage from './components/aboutpage/about.jsx'
import MoreAbout from './components/credentials/credentials.jsx'
import WorkPage from './components/workpage/work.jsx'
import ContactPage from './components/contactpage/contact.jsx'
import { BrowserRouter as Router, Routes, Route,useLocation} from 'react-router-dom';





export default function App() {
  return (
    
  <Router>
     <Navbar/>
    <main>
     
      <Routes>
         <Route exact path='/' element={<HomePage/>}></Route>
         <Route path='/about/' element={<AboutPage/>}></Route>
        <Route path='/credentials/' element={<MoreAbout/>}></Route>
        <Route path='/work/' element={<WorkPage/>}></Route>
        <Route path='/contact/' element={<ContactPage/>}></Route>
         <Route path='*' element={<marquee>Not Found</marquee>}></Route>
       
      </Routes>
     
    </main>
   <Footer/>
  </Router>
    
  )
}



