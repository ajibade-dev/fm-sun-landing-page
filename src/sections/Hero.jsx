import React from 'react'
import Navbar from "./Navbar"
import header from "../images/desktop/image-header.jpg"
import arrow from "../images/icon-arrow-down.svg"
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <div className="h-[650px] md:h-screen relative" style={{
      backgroundImage: `url(${header})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div>
      <Navbar />
      </div>
      
      <div className='pt-32 flex justify-center items-center'>
      <motion.h1 
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount:0.5}}
      transition={{ duration:0.5 }}
      variants={{
        hidden: { opacity: 0, x:-50 },
        visible: { opacity: 1, x: 0 }
      }}
      className='font-bold md:text-5xl text-4xl text-center font-fraunces text-white tracking-widest'>WE ARE CREATIVES</motion.h1>
      </div>
      <div className='flex md:pt-48 pt-32 justify-center items-center'>
      <img src={arrow} alt="arrow" />
      </div>
        


    </div>
  )
}

export default Hero