import React from 'react'
import {motion} from 'framer-motion'
import { model3, model4, profile } from '../assets'
import {FaFacebookF,FaInstagram,FaYoutube} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'
const BoxAnimation ={
  height:'450px',
  transition:{
    duration:.6,
    ease: "linear",
  }
}




const FourPage = () => {
  return (
  <>
    <section>

    <div
    className='bg-[#333] grid justify-center items-center min-h-[100vh] w-full'
    initial={{
      opacity:0,
      width:0
    }}
    animate={{
      opacity:1,
      width:'100%'
    }}
    exit={{
      opacity:0,
      x:window.innerWidth,transition:{duration:0.9}
    }}
    
    >
      <motion.div 
        
        whileHover={BoxAnimation}  
        className="card relative w-[350px] h-[190px] bg-[#333] ">
        <motion.div 
          className="lines absolute inset-0 bg-[#000] overflow-hidden"
          >
            
        </motion.div>
        <div className='imgBx'>
            <img src={profile} className='absolute z-[1] top-[10px] left-[10px] w-[calc(100%-20px)] h-[calc(100%-20px)] grayscale-[1]'/>
        </div>
        <div className='content absolute w-[100%] h-[100%] flex justify-center items-end overflow-hidden'>
            <div className="details">
              <h2 >Aleonora Juźwiak <br/><span>Senior UX/UI Designer</span></h2>
              <div className="data flex justify-between my-[20px] mx-0">
                <h3>343<br/><span>Posts</span></h3>
                <h3>120k<br/><span>Followers</span></h3>
                <h3>285<br/><span>Following</span></h3>
              </div>
              <div className="actionBtn flex justify-between">
                <button className='py-[10px] px-[30px] border-none outline-none rounded-[5px] text-[1em] font-medium bg-[#45f3ff] text-black cursor-pointer  opacity-90 hover:opacity-100'> Followe </button>
                <button className='py-[10px] px-[30px] border-none outline-none rounded-[5px] text-[1em] font-medium bg-white text-black cursor-pointer opacity-90 hover:opacity-100'> Message </button>
              </div>
            </div>
        </div>
      </motion.div>
      
    </div>
  </section>
  <section>
    <div 
      className="box ">
      <span ></span>
      <span ></span>
      <span ></span>
      <span ></span>
    </div>
  </section>
  <section className='bg-[purple]'>
    <div className="cards">
      <div className="ImgBoxs">
        <img src={model3} alt='model' />
        <img src={model4} alt='model' />
      </div>
      <div className="detailss">
        <div className="contents">
            <h2 className='text-black'>
              Some Famous
              <br/>
              <span>Graphic Designer</span>
            </h2>
            <div className="social-icons">
              <a href='#'>
                <FaFacebookF />
              </a>
              <a href='#'>
                <GrLinkedinOption />
              </a>
              <a href='#'>
                <FaInstagram />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
            </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default FourPage