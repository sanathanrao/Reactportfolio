import React from 'react'
import './Skills.css'
import images from '../../constants/images'


const Skills = () => {
  return (
   
    <div id='skills' className='Skills__wrapper Skills__padding'>
       <h1 className='Skills__heading'>Skills & Technologies</h1>
       <div className='grid__container'>

         <div className='icon__box'>
            <img  className='icon__size' src={images.html}/>
             <h2 className='icon__text'>Html</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.css}/>
             <h2 className='icon__text'>Css</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.JavaScript}/>
             <h2 className='icon__text'>JavaScript</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.TypeScript}/>
             <h2 className='icon__text'>TypeScript</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.React}/>
             <h2 className='icon__text'>React</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.Vue}/>
             <h2 className='icon__text'>Vue</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.Next}/>
             <h2 className='icon__text'>Next</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.Bootstrap}/>
             <h2 className='icon__text'>Bootstrap</h2>
         </div>

         <div className='icon__box'>
            <img  className='icon__size' src={images.tailwind}/>
             <h2 className='icon__text'>tailwind</h2>
         </div>

       </div>
    </div>
  )
}

export default Skills