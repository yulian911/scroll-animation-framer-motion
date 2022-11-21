import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <main className={` bg-red-400 w-[100%] flex items-center justify-center  h-11` }>
      <nav className={`flex gap-5`}>
        {['FirstPage', 'SecondPage', 'ThirdPage','FourPage'].map((el,i)=>(
          // <button className='cursor-pointer'>
            <Link key={i} to={`/${i===0? '' : el}`}>{el}</Link>
          // </button>
        ))}
      </nav>
    </main>
  )
}

export default Header