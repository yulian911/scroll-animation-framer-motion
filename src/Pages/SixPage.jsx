import React from 'react'
import { five, four, one, profile, seven, six, three, two } from '../assets'
import css from "./sixpage.module.css";
import {AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'


const data =[
  {image:one,profil:"Programista"},
  {image:two,profil:"UX Designer"},
  {image:three,profil:"UI Designer"},
  {image:four,profil:"Tester"},
  {image:five,profil:"Mobile Developer"},
  {image:six,profil:"Front Developer"},
  {image:seven,profil:"Backend Developer"},
  {image:profile,profil:"Linux Developer"},
]



const SixPage = () => {
  const [active,setActive] =React.useState(false)
  const [activeNum,setActiveNum] =React.useState(null)

  return (
     <div className='flex justify-center items-center min-h-[100vh]'>
        <div className='relative w-[600px] h-[600px] border-[2px] rounded-[50%] border-[white]'>
          <div className="relative w-full h-full flex justify-center items-center left-[-50%]">
              {data?.map((el, i)=>(
                  <div 
                    onClick={()=>setActiveNum(i)}
                    className={`${css.imgBx} cursor-pointer  origin-[340px] ${activeNum===i?css.active:null}`} style={{transform:`rotate(calc(360deg/8*${i}))`}}>
                      <img src={el.image} alt=''  style={{transform:`rotate(calc(-360deg/8*${i}))`}}/>
                    </div>
              ))}    
          </div>
          <div className={css.content}>
         {data.map((el,i)=>(
         
            <div className={`${css.contentBx} ${activeNum ===i? css.activeContent:null}`}>
                <div className={css.card}>
                    <div className="relative w-[150px] h-[150px] rounded-[10px] overflow-hidden">
                      <img src={el.image} alt ='' className='absolute top-0 left-0 w-full h-full object-cover'/>
                    </div>
                    <div className="flex  justify-center items-center flex-col ">
                      <h2 className='text-[1.2em] text-center font-[600] leading-[1em] uppercase  '>
                        Someone Famous<br/> <span className='text-[0.65em] font-[500] tracking-[0.1em]'>{el.profil}</span>
                      </h2>
                      <ul className={`${css.sci} relative flex gap-[7px] mt-[10px]`}>
                   
                        
                        {[<AiFillFacebook/>,<AiFillTwitterCircle/>,<AiFillLinkedin/>,<AiFillInstagram/>].map((el,i)=>(
                          <li key={i}><a className='relative w-[30px] h-[30px] flex justify-center items-center bg-[#444] text-[#fff] rounded-sm  hover:bg-[#2196f3]'  href='#'>{el}</a></li>
                        ))}
                      </ul>
                  </div>
                </div>
             </div>
        
             ))}
           </div>
        
        </div>
        
     </div>
  )
}

export default SixPage