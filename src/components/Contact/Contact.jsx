import React from 'react'
import './Contact.css'
import images from '../../constants/images'
import { Link } from 'react-router-dom';
 
import { motion } from "framer-motion"
import { navVariants } from '../utils/motion'

const Contact = () => {
  return (
    <motion.div>
    <div id='contact' className='contact__wrapper contact__padding'>
       <h1 className='contact__heading' >Contact Me</h1>
      <div className='social__wrap' > 
        <div className='contact__box'>
         <a href="https://twitter.com/sanathan_" target="_blank">
           <img src={images.twitter} /> 
         </a>  
        </div>
        <div className='contact__box'>
         <a href="https://sanathan.hashnode.dev/" target="_blank">
           <img src={images.hashnode} /> 
         </a>  
        </div>
        <div className='contact__box'>
         <a href="https://github.com/sanathan-git"  target="_blank">
           <img src={images.github} /> 
         </a>  
        </div>
        <div className='contact__box'>
         <a href="https://dev.to/sanathan"  target="_blank">
           <img src={images.dev} /> 
         </a>  
        </div>
        <div className='contact__box'>
         <a href="https://www.showwcase.com/sanathan" target="_blank">
           <img src={images.showwcase} />
         </a>   
        </div>
      </div>
     </div>
    </motion.div> 
  )
}

export default Contact