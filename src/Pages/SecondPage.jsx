import React from 'react'
import {motion} from 'framer-motion'

const articles =[
  {id:1,title:"Great time",excerpt:"Await"},
  {id:2,title:"Great time",excerpt:"Await"},
  {id:3,title:"Great time",excerpt:"Await"},
  {id:4,title:"Great time",excerpt:"Await"},
  {id:5,title:"Great time",excerpt:"Await"},
  {id:6,title:"Great time",excerpt:"Await"},
]



const SecondPage = () => {
  return (
    <motion.div
    className='bg-red-800 flex justify-center items-center min-h-[100vh]'
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
      <div className='  flex flex-wrap w-[600px] h-[600px] gap-6 justify-center items-center'>
        {articles.map((article,i)=>(
          <motion.div key={article.id} 
          className='w-40 h-40 bg-violet-800 rounded-lg flex flex-col justify-center items-center'
          initial={{
            opacity:0,
            targetX: i % 2 === 0?-50:50,
            translateY:-50,
          }}
          animate={{opacity:1,translateX:0,translateY:0}}
          transition={{duration:0.3,delay:i*0.2}}
          >
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
          </motion.div>
        ))}
      </div>



    </motion.div>
  )
}

export default SecondPage