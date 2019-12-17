import React, {useRef} from 'react'
import tie from '../../assets/images/black@1.5x.jpg'

export const Hero = ({list}) => {
  const myContainer = useRef(null)
  function handleback(){
    const timer = setInterval(()=> {
      if(myContainer.current.scrollLeft <= myContainer.current.scrollWidth){
        myContainer.current.scrollLeft -= 2
      }
    }, .00001)
    
    
    setTimeout(() => {
      clearInterval(timer)
    }, 300)
  }
  function handleNext(){
    const timer = setInterval(()=> {
      if(myContainer.current.scrollLeft <= myContainer.current.scrollWidth){
        myContainer.current.scrollLeft += 2
      }
    }, .00001)
    
    
    setTimeout(() => {
      clearInterval(timer)
    }, 300)
  }

  return (
  <div className="hero">
  <ul className="ties-container" ref={myContainer}>
    {
      list.map((item, key) => <li className="tie" key={key}><a href="#"><img src={item.tie} alt=""/><p className="tail-name">{item.text}</p></a></li>)
    }
  </ul>
  <div className="scroll-ties-container">
    <button className="back" onClick={handleback}/>
    <h2>Start dressing better</h2>
    <button className="next" onClick={handleNext}/>
  </div>
</div>
)}