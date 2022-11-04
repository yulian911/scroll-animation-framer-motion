import React from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { Shopify, Spense, Spotify, Walmart } from '../assets';

const FirstPage = () => {

  const { ref:sectOne, inView:firstSec} = useInView();
  const { ref:sectTwo, inView:secondSec } = useInView();
  const { ref:sectThree, inView:thirdSec } = useInView();
  const { ref:sectFourth, inView:fourthSec } = useInView();


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
        </section>
       
        <section ref={sectTwo}   className={`hidden1 ${secondSec ? 'show':null} bg-pink-300`}>
        <div class="waves">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className={` bg-black h-28 flex flex-col justify-center items-center p-2 rounded-lg`}>
              <h2>By my product</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi ducimus, iure autem vero nulla nam at sunt vel alias ut impedit, ad rerum omnis facere, voluptate quo. Est, reprehenderit?</p>
          </div>
             
        </section>
        <section ref={sectThree} className={`hidden1 ${thirdSec ? 'show':null}  bg-green-300`}>
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
   
    
    </motion.div>
  )
}

export default FirstPage

