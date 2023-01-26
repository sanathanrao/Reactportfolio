import React , { useState } from 'react'
import images from '../../constants/images'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiCrossedBones } from 'react-icons/gi';
import './Navbar.css'
 
import { motion } from "framer-motion"
import { navVariants } from '../utils/motion'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
   <motion.div 
   variants={navVariants}
   initial="hidden"
   whileInView="show"
   >
    <nav id='home' className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logoblack} alt="" />
        </div>
        <ul className='app__navbar-links'>
            <li className='nav__link'><a href="#about">About</a></li>
            <li className='nav__link'><a href="#skills">Skills</a></li>
            <li className='nav__link'><a href="#work">Work</a></li>
            <li className='nav__link'><a href="#blog">Blog</a></li>
            <li className='nav__link'><a href="#contact">Contact</a></li>
         </ul>

      <div className='app__navbar-smallscreen'>
         <GiHamburgerMenu className='app__menu-button' onClick={() => setToggleMenu(true)}/>
         {toggleMenu && (

           <div className='app__navbar-smallscreen_overlay slide-bottom'>
             <GiCrossedBones className='overlay__close app__menu-button' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen_links'>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#work" onClick={() => setToggleMenu(false)}>Work</a></li>
                <li><a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a></li>
                <li><a href="#blog" onClick={() => setToggleMenu(false)}>Blog</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
           </div>
         )}
      </div>
    </nav>
  </motion.div>
  )
}

export default Navbar