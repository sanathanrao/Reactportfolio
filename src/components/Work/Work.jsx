import React from 'react'
import './Work.css'
import images from '../../constants/images'

const Work = () => {
  return (
    <>
    <div id='work' className='work__wrapper section__padding' >
       <h1 className='w-h1'>Projects</h1>

  <div className='project__Layout'>
       <div class="container">
         <div class="card">
          <div class="imgBx">
            <img src={images.websiteoutlook}/>
          </div>
          <div class="contentBx">
            <h2>Restaurent website with Html and Css</h2>
            <div>
                <a href="https://github.com/sanathan-git/HealthyFats" target="_blank">
                    <i class="ic fa-brands fa-github"></i>
                  </a>
                   <a href="https://healthy-fats.vercel.app/" target="_blank">
                   <i class="ic fa-solid fa-eye"></i>
                   </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
         <div class="card">
          <div class="imgBx">
            <img src={images.metta}/>
          </div>
          <div class="contentBx">
            <h2>Metaverse website with Next.js and Tailwindcss</h2>
            <div>
                <a href="https://github.com/sanathan-git/metaversus" target="_blank">
                    <i class="ic fa-brands fa-github"></i>
                  </a>
                   <a href="https://metaverse-sage-psi.vercel.app/" target="_blank">
                   <i class="ic fa-solid fa-eye"></i>
                   </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src={images.housecanada}/>
          </div>
          <div class="contentBx">
            <h2>RealEstate website with React and Tailwindcss</h2>
            <div>
                <a href="https://github.com/sanathan-git/Estateproperties" target="_blank">
                    <i class="ic fa-brands fa-github"></i>
                  </a>
                   <a href="https://estateproperties.vercel.app/" target="_blank">
                   <i class="ic fa-solid fa-eye"></i>
                   </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src={images.portfff}/>
          </div>
          <div class="contentBx">
            <h2>Portfolio made with React❤️ & Css</h2>
            <div>
                <a href="https://github.com/sanathan-git/Estateproperties" target="_blank">
                    <i class="ic fa-brands fa-github"></i>
                  </a>
                   <a href="https://estateproperties.vercel.app/" target="_blank">
                   <i class="ic fa-solid fa-eye"></i>
                   </a>
            </div>
          </div>
        </div>
      </div>
  </div>
      </div> 
    </>
  )
}

export default Work