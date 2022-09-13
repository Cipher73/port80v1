import React ,{useState} from 'react'
import Sidebar from '../../Components/SideBar'
import Navbar from '../../Components/Navbar'
import HeroSection from '../../Components/HeroSection'
import LanguageSec from '../../Components/LanguageSec'
import Contact from '../../Components/Contact'
import './home.css'
import Portfolio from  '../../Components/Portfolio/Portfolio'
import { Homedata } from './data';
import BottomFooter from '../../Components/BottomFooter'
const Home = () => {

    const [isOpen,setIsOpen] = useState(false)

    const toggle =()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
     
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection {...Homedata} />
    <LanguageSec/>
    <Portfolio/>
    <Contact/>
    <BottomFooter/>
    </>
  )
}

export default Home