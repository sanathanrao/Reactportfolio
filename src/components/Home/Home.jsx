import React from 'react'
import './Home.css'
import { AiFillCaretRight } from 'react-icons/ai'
import images from '../../constants/images'


const Home = () => {
  return (
     <div id="about"  className='app__header app__wrapper section__padding'>
        <div className='app__wrapper_info'>
            <h1 className='app__header-h1'>Hi,👋 I'm <span>Sanathan</span></h1>
            <h2 className='app__header-h2'>Frontend developer</h2>
            <p className='p__header'>I create beautiful websites that feel amazing while using it. I love to design and develop website, producing quality work.</p>
            
            <a href="#contact">
            <button type='button' className='custom__button'>Contact Me
              <AiFillCaretRight className='icon__button' />
            </button>
           </a> 
        </div>
        

        <div className='app__wrapper_img'>
            <img src={images.profile} alt="" />
        </div>
     </div> 
  )
} 

export default Home