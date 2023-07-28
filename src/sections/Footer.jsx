import React from 'react'
import facebook from "../images/icon-facebook.svg"
import instagram from "../images/icon-instagram.svg"
import pinterest from "../images/icon-pinterest.svg"
import twitter from "../images/icon-twitter.svg"
const Footer = () => {
  return (
    <div className='bg-[#96d3c4] py-16'>
      <div className='flex flex-col gap-8 items-center mx-auto justify-center'>
          <h3 className='font-extrabold font-sans-serif text-dark-cyan lg:text-3xl text-2xl'>sunnyside</h3>
          <div className='flex flex-row'>
            <p className='font-barlow text-dark-cyan mr-12 hover:text-white transition duration-150'>About</p>
            <p className='font-barlow text-dark-cyan mr-12 hover:text-white transition duration-150'>Services</p>
            <p className='font-barlow text-dark-cyan hover:text-white transition duration-150'>Projects</p>
          </div>
          <div className='flex flex-row mt-16'>
            
            <img src={facebook} alt="facebook" className='mr-8 hover:bg-white cursor-pointer ' />
              
              <img src={instagram} alt="instagram" className='mr-8 hover:bg-white cursor-pointer '  />
              <img src={twitter} alt="twitter" className='mr-8 hover:text-white cursor-pointer '  />
              <img src={pinterest} alt="pinterest" className='hover:bg-white cursor-pointer ' />
          </div>
      </div>
    </div>
  )
}

export default Footer