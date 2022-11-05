import React from 'react'
import {motion} from 'framer-motion'
import Backdrop from './Backdrop'



const dropIn ={
    hidden:{
        y:"-100vh",
        opacity:0,
    },
    visible:{
        y:"0",
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:100,
            stiffness:500
        }
    },
    exit:{
        y:"-100vh",
        opacity:0,
    }
}


const Modal = ({handleClose ,text}) => {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e)=>e.stopPropagation()}
            className='w-[clamp(50%,700px,90%)] h-[min(50%,300px)] m-auto p-[0,2rem] rounded-[12px] flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <p>{text}</p>
            <button className='w-40 bg-white mt-8 text-black rounded-lg font-bold' onClick={handleClose}>Close</button>
        </motion.div>

    </Backdrop>
  )
}

export default Modal