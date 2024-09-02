import styles from './work.module.css'
import ProjectBox from './projectbox'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'
import project6 from '../../assets/project6.jpg'


function WorkPage() {
  
  return(
    <>
    
      <div className={styles['container']}>
       
          <ProjectBox imgUrl={project1} projectName='Admin Pannel Dashboard'
repoLink='https://github.com/programmer-raunak/Responsive-Admin-Panel-Dashboard-.git'
projectLink='https://programmer-raunak.github.io/Responsive-Admin-Panel-Dashboard-/collapsible-menu/index.html'
>
            <span id='html'>HTML</span><span id='css'>CSS</span><span id='js'>JavaScript</span><span id='chart'>ApexChartsJs</span>
          </ProjectBox>


                  <ProjectBox imgUrl={project2}
projectName='NFT MARKET-PLACE WEBSITE'
        repoLink='https://github.com/code-web-world/NFT-Market-Place-website-.git'
        projectLink='https://programmer-raunak.github.io/NFT-Market-Place-website-/'
        >
                    <span id='html'>HTML</span><span id='css'>CSS</span><span id='js'>JavaScript</span>
                  </ProjectBox>
                <ProjectBox imgUrl={project3} projectName='Search Your Words'
repoLink='https://github.com/code-web-world/Search-Your-Word.git'
projectLink='https://programmer-raunak.github.io/Search-Your-Word/'
>
        <span id='html'>HTML</span><span id='css'>CSS</span><span id='js'>JavaScript</span>
      
      </ProjectBox>
       

        
        <ProjectBox imgUrl={project4} projectName='Voice Assistant'
        repoLink='https://github.com/code-web-world/Voice-Assistant-.git'
        projectLink='https://programmer-raunak.github.io/Voice-Assistant-/'
        >
                <span id='html'>HTML</span><span id='css'>CSS</span><span id='js'>JavaScript</span>

              </ProjectBox>

              <ProjectBox imgUrl={project5} projectName='Image Editor'
        repoLink='https://github.com/code-web-world/Image-Editor.git'
        projectLink='https://raunak-image-editor.vercel.app/'
        >
                <span id='html'>HTML</span><span id='css'>CSS</span><span id='react'>ReactJs</span>

              </ProjectBox>
                  

              
                        <ProjectBox imgUrl={project6} projectName='Wall Clock'
        repoLink='https://github.com/code-web-world/Wall-Clock.git'
        projectLink='https://programmer-raunak.github.io/Wall-Clock/index.html'
        >
                <span id='html'>HTML</span><span id='css'>CSS</span><span id='js'>JavaScript</span>

              </ProjectBox>

       <p className={styles['b-text']}>Projects Updating Soon...</p>
      </div>
    </>
  )
}

export default WorkPage
