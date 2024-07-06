import './talkbox.css'
import designImg from '../../assets/design.png'
import arrow from '../../assets/arrow.svg'

function TalkBox() {
  return(
    <>
    <img src={designImg} className='design-img'/>
      <div className='talk-text'>
       <h1>Let's</h1>
       <h1 className='work-together h2'>work</h1>
       <h1 className='work-together h3'>Together</h1>
        <span className='talkbox-arrow'><img src={arrow} /></span>
      </div>
    </>
    
  )
}

export default TalkBox