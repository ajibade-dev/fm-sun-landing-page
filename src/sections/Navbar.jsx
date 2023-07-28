import React, {useState, useEffect} from 'react'
import logo from "../images/logo.svg"
import hamburger from "../images/icon-hamburger.svg"

const Navbar = () => {

  const [nav, setNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // to give sticky menu another color when scrolling
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const navbarClass = scrolled ? 'bg-[#000000] ' : 'bg-transparent';

//to open and close the menu in mobile
  const handleNav = () => {
    setNav(!nav)
  }

  return (

    <div class={nav ? "bg-transparent lg:pb-2 mx-auto" : "bg-transparent mx-auto"}>
    <div class="px-4 md:px-8 w-full">
      <header class="flex items-center justify-between py-4 md:py-4 w-full">
        {/* <!-- logo - start --> */}
        <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-white md:text-3xl" aria-label="logo">
        <img src={logo} alt="" />
        </a>
        {/* <!-- logo - end --> */}
  
        {/* <!-- nav - start --> */}
        <nav class=" hidden gap-12 md:flex items-center font-barlow">
          <a href="#" className="text-base font-semibold text-white transition duration-100">About</a>
          <a href="#" className="text-base font-semibold text-white transition duration-100 ">Services</a>
          <a href="#" className="text-base text-white transition duration-100 font-semibold ">Project</a>
          <a href="" className='px-8 py-2 text-dark-blue bg-white text-center rounded-full font-semibold font-fraunces hover:bg-gray-300 hover:bg-opacity-70 hover:text-white'>CONTACT</a>
        </nav>
        {/* <!-- nav - end --> */}
  
      {/* icon for menu open */}
        <div onClick={handleNav} className='cursor-pointer md:hidden flex'>
        <img src={hamburger} alt="" />
        </div>
      
      </header>
      <div className={!nav ? 'fixed right-[25%] top-20 min-h-[35%] max-h-[40%] min-w-[50%] max-w-[60%] p-4 z-10 bg-white transition ease-in-out duration-300 shadow-lg shadow-very-dark-blue justify-center items-center md:hidden' : ' fixed right-[-100%]'}>
  
          {/* icon for menu close */}
      <ul className='flex flex-col pt-4 gap-4 items-center font-barlow'>
      <a href="#" className="text-base font-semibold text-very-dark-gray-blue transition duration-100">About</a>
          <a href="#" className="text-base font-semibold text-very-dark-gray-blue transition duration-100 ">Services</a>
          <a href="#" className="text-base text-very-dark-gray-blue transition duration-100 font-semibold ">Project</a>
          <a href="" className='px-8 py-2 text-dark-blue bg-yellow text-center rounded-full font-semibold font-fraunces'>CONTACT</a>
      </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar