import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { Shopify, Spense, Spotify, Walmart } from '../assets';
import Modal from '../Components/Modal';



const FirstPage = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const { ref:sectOne, inView:firstSec} = useInView();
  const { ref:sectTwo, inView:secondSec } = useInView();
  const { ref:sectThree, inView:thirdSec } = useInView();
  const { ref:sectFourth, inView:fourthSec } = useInView();


  const close =()=>setModalOpen(false)
  const open =()=>setModalOpen(true)

  const AnimateBox ={
    hidden:{
      scale:.8,
      opacity:0
    },
    visible:{
      scale:1,
      opacity:1,
      transition:{
        delay:.4
      }
    }
  }
  const BoxAnimation ={
      position:'relative',
      zIndex:1,
      background:'white',
      scale:1.2,
      transition:{
        duration:.2
      }
  }

  return (
    <motion.div 
        className='bg-slate-600 w-[100%]'
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
          x:window.innerWidth,transition:{duration:0.1}
        }}
        >
        <section ref={sectOne}  className={` bg-yellow-300`}>
          <div className={`hidden1 ${firstSec ? 'show':null} bg-black h-28 flex flex-col justify-center       items-center p-2 rounded-lg`}>
              <h1>Hi Someone</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum eveniet neque quis, sapiente labore minus ex! Modi molestias, cumque ut nemo laboriosam dicta quod, labore dignissimos mollitia earum illo?</p>

          </div>
          <motion.button 
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className='w-40 h-20 bg-violet-700 rounded-lg'
          onClick={()=>(modalOpen? close():open())}
          >
            Click
          </motion.button>
        </section>
       
        <section ref={sectTwo}   className={`hidden1 ${secondSec ? 'show':null} bg-pink-300 layer1  bg-no-repeat bg-top bg-cover`}>
      
        <div className={` bg-black h-28 flex flex-col justify-center items-center p-2 rounded-lg`}>
              <h2>By my product</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi ducimus, iure autem vero nulla nam at sunt vel alias ut impedit, ad rerum omnis facere, voluptate quo. Est, reprehenderit?</p>
          </div>
             
        </section>
        <section ref={sectThree} className={`hidden1  ${thirdSec ? 'show':null}  bg-green-300`}>
        <div className={` bg-black h-28 flex flex-col justify-center items-center p-2 rounded-lg`}>
              <h2>By my product</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi ducimus, iure autem vero nulla nam at sunt vel alias ut impedit, ad rerum omnis facere, voluptate quo. Est, reprehenderit?</p>
          </div>
        </section>
        <section ref={sectFourth} className={`logos `}>
                <motion.div 
                    whileHover={BoxAnimation}  
                className={`logo hidden1 ${fourthSec ?'show' :null}`}>
                    <img src={Shopify} alt='Shopify'/>
                </motion.div>
                <motion.div 
                whileHover={BoxAnimation}  
                className={`logo hidden1 ${fourthSec ?'show' :null}`}>
                    <img src={Spotify} alt='netflix'/>
                </motion.div>
                <motion.div 
                whileHover={BoxAnimation}  
                className={`logo hidden1 ${fourthSec ?'show' :null}`}>
                    <img src={Walmart} alt='netflix'/>
                </motion.div>
                <motion.div 
                whileHover={BoxAnimation}  
                className={`logo hidden1 ${fourthSec ?'show' :null}`}>
                    <img src={Spense} alt='netflix'/>
                </motion.div>

        </section> 
        <section>
          <div className='w-full h-full bg-[#eff0f4] flex justify-center items-center'>
              <div className='drop'  >
                  <div className='relative flex justify-center items-center flex-col text-center p-[40px] gap-[15px] text-black'>
                    <h2 className='text-[#be01fe] font-bold'>01</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis blanditiis hic quaerat, optio magni ratione officiis placeat animi temporibus, ut, maiores iste aut suscipit!</p>
                    <a href='#' className='relative py-[10px] px-[25px] bg-[#be01fe] text-white rounded-[25px] font-medium opacity-[0.75] transition delay-75 hover:opacity-[1]' >Read More</a>
                  </div>
              </div>

          </div>
        </section>
   
        {modalOpen &&<Modal modalOpen={modalOpen} handleClose={close}/>}
    </motion.div>
  )
}

export default FirstPage

