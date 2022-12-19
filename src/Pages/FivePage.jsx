import React from 'react'
import { AiFillAndroid ,AiFillBug,AiFillDollarCircle,AiFillDribbbleCircle ,AiFillDelete,AiFillEuroCircle,AiFillHome,AiFillLinkedin,AiFillRead,AiFillRocket,AiFillGitlab,AiFillFire,AiFillFormatPainter,AiFillShop,AiFillTwitterSquare,AiFillStar,AiFillTrophy,AiFillThunderbolt,AiFillTool,AiFillSound} from "react-icons/ai";
import { motion } from 'framer-motion';

const data =[
            <AiFillAndroid className='icons'/>,
            <AiFillBug className='icons'/>,
            <AiFillDollarCircle className='icons'/>,
            <AiFillDribbbleCircle className='icons'/>,
            <AiFillDelete className='icons'/>,
            <AiFillEuroCircle className='icons'/>,
            <AiFillHome className='icons'/>,
            <AiFillLinkedin className='icons'/>,
            <AiFillRead className='icons'/>,
            <AiFillRocket className='icons'/>,
            <AiFillGitlab className='icons'/>,
            <AiFillFire className='icons'/>,
            <AiFillFormatPainter className='icons'/>,
            <AiFillShop className='icons'/>,
            <AiFillTwitterSquare className='icons'/>,
            <AiFillStar className='icons'/>,
            <AiFillTrophy className='icons'/>,
            <AiFillThunderbolt className='icons'/>,
            <AiFillTool className='icons'/>,
            <AiFillSound className='icons'/>,       
            <AiFillHome className='icons'/>,
            <AiFillLinkedin className='icons'/>,
            <AiFillRead className='icons'/>,
            <AiFillRocket className='icons'/>,
            <AiFillGitlab className='icons'/>,
            <AiFillFire className='icons'/>,
            <AiFillFormatPainter className='icons'/>,
            <AiFillShop className='icons'/>,
            <AiFillGitlab className='icons'/>,
            <AiFillFire className='icons'/>,
            <AiFillFormatPainter className='icons'/>,
            <AiFillShop className='icons'/>,
            <AiFillFire className='icons'/>,
            <AiFillFormatPainter className='icons'/>,
            <AiFillShop className='icons'/>,
            <AiFillRocket className='icons'/>,
            <AiFillGitlab className='icons'/>,
            <AiFillFire className='icons'/>,
            <AiFillFormatPainter className='icons'/>,
            <AiFillShop className='icons'/>,
            <AiFillGitlab className='icons'/>,
            <AiFillFire className='icons'/>,
            <AiFillFormatPainter className='icons'/>,
            <AiFillShop className='icons'/>,
            <AiFillGitlab className='icons'/>,

]



const FivePage = () => {

  return (
    <div className='relative overflow-hidden w-full h-[100vh]'>
      <div className="rows w-full flex py-[10px] px-0 whitespace-nowrap text-[64px] flex-col absolute top-[-30%] left-[-20%] ">    
         <motion.div 
         >
            {[...Array(30)].map((_, i)=>(
                    <div className='flex'>
                      {
                        data.map(el=>(
                          <span className='animate-waving-hand '>
                            {el}
                          </span>
                        ))
                      }
                    </div>
            ))}
         </motion.div>
      </div>
    

    </div>
  )
}

export default FivePage



