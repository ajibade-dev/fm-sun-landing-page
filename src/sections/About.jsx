import React from 'react'
import { motion } from 'framer-motion'
import transform from "../images/desktop/image-transform.jpg"
import trans from "../images/mobile/image-transform.jpg"
import translate from "../images/desktop/image-stand-out.jpg"
import translator from "../images/mobile/image-stand-out.jpg"
import graphic from "../images/mobile/image-graphic-design.jpg"
import graphicate from "../images/desktop/image-graphic-design.jpg"
import orange from "../images/desktop/image-photography.jpg"
import photography from "../images/mobile/image-photography.jpg"


const About = () => {

  return (
    // the first upper part
    <>
    <div className='realtive flex flex-col-reverse md:flex-row'>

        {/* for the first box */}
        <div className='flex flex-col lg:w-1/2 w-full bg-white justify-center items-center py-32 px-5'>

          <div className='w-3/4 text-center md:text-start'>
          <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.5}}
          transition={{ duration:0.5 }}
          variants={{
            hidden: { opacity: 0, x:50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='md:text-5xl text-4xl font-fraunces font-bold text-dark-sat-blue'>
            Transform your brand
          </motion.h2>

          <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once:true, amount:0.5}}
           transition={{ delay:0.3, duration:0.5 }}
           variants={{
             hidden: { opacity: 0, x:50 },
             visible: { opacity: 1, x: 0 }
           }}
          className='mt-10'>
            <p 
           
            className='font-semibold font-barlow text-xl text-dark-gray-blue'>We are a full-service creative agency specilaizing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          </motion.div>

          <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once:true, amount:0.5}}
           transition={{ delay:0.5, duration:0.5 }}
           variants={{
             hidden: { opacity: 0, y:50 },
             visible: { opacity: 1, y: 0 }
           }}
          className='mt-10 relative'>
            <p className='font-extrabold font-fraunces text-base text-dark-sat-blue'>LEARN MORE</p>
            
          </motion.div>
          </div>
          </div>

        {/* for the second box */}
        <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once:true, amount:0.5}}
         transition={{ duration:0.5 }}
         variants={{
           hidden: { opacity: 0, x:50 },
           visible: { opacity: 1, x: 0 }
         }}
        className='flex flex-col lg:w-1/2 w-full justify-center items-center'>
          <img src={trans} alt="" className='w-full flex lg:hidden' />
          <img src={transform} alt="" className='w-full hidden lg:flex'/>
        </motion.div>
    </div>

 {/* // the second middle part */}
 <div className='flex flex-col md:flex-row'>

   {/* for the first box */}
 <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once:true, amount:0.5}}
  transition={{ duration:0.5 }}
  variants={{
    hidden: { opacity: 0, x:-50 },
    visible: { opacity: 1, x: 0 }
  }}
 className='flex flex-col lg:w-1/2 w-full justify-center items-center'>
   <img src={translator} alt="" className='w-full flex lg:hidden' />
   <img src={translate} alt="" className='w-full hidden lg:flex'/>
 </motion.div>

 {/* for the second box */}
 <div className='flex flex-col lg:w-1/2 w-full bg-white justify-center items-center py-32 px-5'>

   <div className='w-3/4 text-center md:text-start'>
   <motion.h2 
   initial="hidden"
   whileInView="visible"
   viewport={{ once:true, amount:0.5}}
   transition={{ duration:0.5 }}
   variants={{
     hidden: { opacity: 0, x:50 },
     visible: { opacity: 1, x: 0 }
   }}
   className='md:text-5xl text-4xl font-fraunces font-bold text-dark-sat-blue'>
     Stand out to the right audience.
   </motion.h2>

   <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true, amount:0.5}}
    transition={{ delay:0.3, duration:0.5 }}
    variants={{
      hidden: { opacity: 0, x:50 },
      visible: { opacity: 1, x: 0 }
    }}
   className='mt-10'>
     <p 
    
     className='font-semibold font-barlow text-xl text-dark-gray-blue'>Using a collaborative formula of designers, researchers, photographers, videographers, we'll build and extend your brand in digital places.</p>
   </motion.div>

   <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true, amount:0.5}}
    transition={{ delay:0.5, duration:0.5 }}
    variants={{
      hidden: { opacity: 0, y:50 },
      visible: { opacity: 1, y: 0 }
    }}
   className='mt-10 relative'>
     <p className='font-extrabold font-fraunces text-base text-dark-sat-blue'>LEARN MORE</p>
     
   </motion.div>
   </div>
   </div>


</div>

{/* // the third lower part */}
<div className='flex flex-col md:flex-row'>

{/* for the first box */}
<motion.div 
initial="hidden"
whileInView="visible"
viewport={{ once:true, amount:0.5}}
transition={{ duration:0.5 }}
variants={{
 hidden: { opacity: 0, x:-50 },
 visible: { opacity: 1, x: 0 }
}}
className='relative flex flex-col lg:w-1/2 w-full justify-center items-center'>
<img src={graphic} alt="" className='w-full flex lg:hidden' />
<img src={graphicate} alt="" className='w-full hidden lg:flex'/>

<div 
class="absolute bottom-[10%] left-1/2 -translate-x-1/2">
<h3 className='text-2xl font-extrabold font-fraunces text-dark-cyan text-center'>Graphic Design</h3>
<p className='text-md font-barlow text-mod-cyan text-center mt-5'>Great designs makes you memorable. We deliver artwork that underscores your brand's message and capture potential client attention.</p>
</div>
</motion.div>

{/* for the second box */}
<motion.div 
initial="hidden"
whileInView="visible"
viewport={{ once:true, amount:0.5}}
transition={{ delay:0.2, duration:0.5 }}
variants={{
 hidden: { opacity: 0, x:50 },
 visible: { opacity: 1, x: 0 }
}}
className='relative flex flex-col lg:w-1/2 w-full justify-center items-center'>
<img src={photography} alt="" className='w-full flex lg:hidden' />
<img src={orange} alt="" className='w-full hidden lg:flex'/>

<div 
class="absolute bottom-[10%] left-1/2 -translate-x-1/2">
<h3 className='text-2xl font-extrabold font-fraunces text-dark-blue text-center'>Photography</h3>
<p className='text-md font-barlow text-dark-blue text-center mt-5'>Increase your credibility by getting the most high quality photos that improve your business image</p>
</div>
</motion.div>
</div>

</>
         
  )
}

export default About