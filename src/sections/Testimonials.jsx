import React from 'react'
import { motion } from 'framer-motion'
import emily from "../images/image-emily.jpg"
import jennie from "../images/image-jennie.jpg"
import thomas from "../images/image-thomas.jpg"
const Testimonials = () => {
  return (
    <div className='bg-white lg:p-32 p-8  mx-auto '>
{/* the div to hold the 3 cards */}
<h1 className='text-center font-fraunces font-bold text-xl tracking-[10px] text-dark-gray-blue mb-24'>
      CLIENT TESTIMONIALS
    </h1>
<div className='bg-white flex flex-col md:flex-row items-center gap-5'>
  {/* the fist testimonial */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true, amount:0.5}}
    transition={{ duration:0.5 }}
    variants={{
      hidden: { opacity: 0, x:-50 },
      visible: { opacity: 1, x: 0 }
    }}
    className='flex flex-col gap-16 lg:w-1/3 w-full mb-10 lg:mb-0 items-center'>
      <img src={emily} alt="emily" className='rounded-full w-20 h-20' />
      <div className='lg:w-3/4 w-full'>
        <p className='text-center font-barlow font-bold text-very-dark-gray-blue'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
      </div>

      <div>
        <h3 className='font-extrabold font-fraunces text-dark-sat-blue text-center text-xl'>Emily R</h3>
        <p className='font-barlow text-sm text-gray-blue'>Marketing Director</p>
      </div>
    </motion.div>


    {/* the second testimonial */}
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true, amount:0.5}}
    transition={{ delay:0.4, duration:0.5 }}
    variants={{
      hidden: { opacity: 0, x:0 },
      visible: { opacity: 1, x: 0 }
    }}
    className='flex flex-col gap-16 lg:w-1/3 w-full mb-10 lg:mb-0 items-center'>
      <img src={thomas} alt="emily" className='rounded-full w-20 h-20' />
      <div className='lg:w-3/4 w-full'>
        <p className='text-center font-barlow font-bold text-very-dark-gray-blue'>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
      </div>

      <div>
        <h3 className='font-extrabold font-fraunces text-dark-sat-blue text-center text-xl'>Thomas S</h3>
        <p className='font-barlow text-sm text-gray-blue'>Chief Operating Officer</p>
      </div>
    </motion.div>

    {/* the third testimonial */}
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true, amount:0.5}}
    transition={{ delay:0.8, duration:0.5 }}
    variants={{
      hidden: { opacity: 0, x:50 },
      visible: { opacity: 1, x: 0 }
    }}
    className='flex flex-col gap-16 lg:w-1/3 w-full  mb-10 lg:mb-0 items-center'>
      <img src={jennie} alt="emily" className='rounded-full w-20 h-20' />
      <div className='lg:w-3/4 w-full'>
        <p className='text-center font-barlow font-bold text-very-dark-gray-blue'>Incredible and result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
      </div>

      <div>
        <h3 className='font-extrabold font-fraunces text-dark-sat-blue text-center text-xl'>Jennie F</h3>
        <p className='font-barlow text-sm text-gray-blue'>Business Owner</p>
      </div>
    </motion.div>
</div>
    </div>
  )
}

export default Testimonials