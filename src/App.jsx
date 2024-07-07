import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import HomePage from './components/homepage/home.jsx'
import AboutPage from './components/aboutpage/about.jsx'
import MoreAbout from './components/credentials/credentials.jsx'
import WorkPage from './components/workpage/work.jsx'
import ContactPage from './components/contactpage/contact.jsx'
import NotFound from './components/404page/notFound.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';





export default function App() {
  return (
    
  <Router>
     
     
      <Routes>
         <Route exact path='/' element={
      <>
           <Navbar/>
           <main>
             <HomePage/>
           </main>
           <Footer/>
         </>
         }>
         
         </Route>
        
         <Route path='/about/' element={
      <>
           <Navbar/>
           <main>
             <AboutPage/>
           </main>
           <Footer/>
         </>
         }></Route>
        <Route path='/credentials/' element={
          <>
           <Navbar/>
           <main>
             <MoreAbout/>
           </main>
           <Footer/>
         </>
        }></Route>
        <Route path='/work/' element={
        <>
           <Navbar/>
           <main>
             <WorkPage/>
           </main>
           <Footer/>
         </>
        }></Route>
        <Route path='/contact/' element={
          <>
           <Navbar/>
           <main>
             <ContactPage/>
           </main>
           <Footer/>
         </>
        }></Route>
         <Route path='*' element={<NotFound/>}></Route>
       
      </Routes>
     
    
  </Router>
    
  )
}



