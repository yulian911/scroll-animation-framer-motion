import { Route, Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import './App.css'
import Header from './Components/Header'
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'

function App() {


  const location =useLocation();
  // const [myElementIsVisible,setMyElIsVisible] =useState()
  // const elRef = useRef()

  // useEffect(() => {

  //   // console.log('elRef',elRef.current.className)
  //   const observer =new IntersectionObserver((entries)=>{
  //     // const entry =entries[0]
  //     entries.forEach((entry)=>{console.log(entry.isIntersecting)})
  //     // setMyElIsVisible(entry.isIntersecting)
      
  //   })
  //   observer.observe(elRef.current)
  // }, [])
  



  return (
    <div className="App">
      <Header/>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/SecondPage' element={<SecondPage/>}/>
          <Route path='/ThirdPage' element={<ThirdPage/>}/>
        </Routes>
      </AnimatePresence>
      
    </div>
  )
}

export default App
