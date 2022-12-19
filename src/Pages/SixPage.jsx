import React from 'react'
import { profile } from '../assets'
import css from "./sixpage.module.css";







const SixPage = () => {
  return (
     <div className='flex justify-center items-center min-h-[100vh]'>
        <div className='relative w-[600px] h-[600px] border-[2px] rounded-[50%] border-[white]'>
          <div className="relative w-full h-full flex justify-center items-center left-[-50%]">
          {[...Array(8)].map((_, i)=>(
              <div className={`${css.imgBx} rotate-[calc(360deg/8*${i+1})] origin-[340px] ${css.active}`}>
                  <img src={profile} alt='' className={`absolute top-0 left-0 w-full h-full rounded-[50%] rotate-[calc(0deg/8*${i+1})]`}/>
                </div>
          ))}

              
          </div>
        </div>
     </div>
  )
}

export default SixPage