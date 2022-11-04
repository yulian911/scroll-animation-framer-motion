import React from 'react'
import {motion} from 'framer-motion'
const SecondPage = () => {
  return (
    <motion.div
    className='bg-red-800 grid justify-center items-center min-h-[100vh]'
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
    
    >SecondPage</motion.div>
  )
}

export default SecondPage