import React from 'react'
import {motion} from 'framer-motion'
import { firebase, html, java, jupyter, mongodb, nodeJs, python, reactJS, scss, tailwindcss, typescript } from '../assets';



const ThirdPage = () => {

  const ferrisOfTechs = [
    firebase,
    html,
    // java,
    // jupyter,
    mongodb,
    nodeJs,
    // python,
    reactJS,
    scss,
    tailwindcss,
    typescript,
  ];





  return (
    <div
    className='bg-yellow-800 grid justify-center items-center min-h-[100vh] w-full'
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
{ferrisOfTechs.map((tech, index) => {
        return (
          <motion.div
            className=" right-[50%] fixed h-[50%] overflow-hidden  "
            key={index + 1}
            initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  repeat: Infinity,
                  delay: index + 1,
                  ease: "linear",
                },
              },
            }}
          >
            <div className="image-parent">
              <img
                className="h-[40px] pointer-events-none"
                src={tech}
                alt={tech}
              />
            </div>
          </motion.div>
        );
      }, [])}

     >




    </div>
  )
}

export default ThirdPage