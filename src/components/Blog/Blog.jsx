import React from 'react'
import './Blog.css'
import images from '../../constants/images'

const Blog = () => {
  return (
  
    <div id='blog' className='Blog__wrapper Blog__padding'>
        <h1 className='Blog__heading' >Blogs</h1>

      <div className='blogbox__wrap'>
        <div className='blog__box'>
          <a href="https://sanathan.hashnode.dev/react-props-for-beginner" target="_blank">
           <img className='blog__img' src={images.blog1} />
            <h2 className='blog__text__title'>React props for beginner</h2>
            <p className='blog__para'>React props · What are props? ➜ The word “props” simply 
              means “properties”, and it's works similar to HTML attributes...</p>
              </a>
        </div>

        <div className='blog__box'>
          <a href="https://sanathan.hashnode.dev/usereducer-hook-explained-react" target="_blank">
           <img className='blog__img' src={images.blog2} />
            <h2 className='blog__text__title'>useReducer hook explained React</h2>
            <p className='blog__para'>➜ The useReducer hook is similar to useState hook which is 
              used to store the value and used later. ...</p>
          </a>    
        </div>

        <div className='blog__box'>
          <a href="https://sanathan.hashnode.dev/array-methods-in-javascript" target="_blank">
           <img className='blog__img' src={images.blog3} />
            <h2 className='blog__text__title'>Javascript Arrays for beginners</h2>
            <p className='blog__para'>what is Array? An array is an object which can store multiple values. 
              Arrays store data as elements...</p>
          </a>    
        </div>

        <div className='blog__box'>
          <a href="https://sanathan.hashnode.dev/useref-hook-explained-react" target="_blank">
           <img className='blog__img' src={images.blog4} />
            <h2 className='blog__text__title'>useRef hook explained react</h2>
            <p className='blog__para'>↠ Hooks introduced in React 16.8, allow us to use stateful logic, 
              lifecycle methods, and side-effects in Functional Components....</p>
          </a>
        </div>
      </div>
    </div> 
  )
}

export default Blog