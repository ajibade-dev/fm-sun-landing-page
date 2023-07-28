import React from 'react'
import { motion } from 'framer-motion'
import cone from "../images/desktop/image-gallery-cone.jpg"
import  milkbottles from "../images/desktop/image-gallery-milkbottles.jpg"
import orange from "../images/desktop/image-gallery-orange.jpg"
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg"
import cones from "../images/mobile/image-gallery-cone.jpg"
import milkbottle from "../images/mobile/image-gallery-milkbottles.jpg"
import oranges from "../images/mobile/image-gallery-orange.jpg"
import sugarcube from "../images/mobile/image-gallery-sugar-cubes.jpg"

const Products = () => {
  return (
    <div className='flex flex-row flex-wrap mt-10'>
      {/* first image */}
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount:0.5}}
      transition={{ duration:0.5 }}
      variants={{
        hidden: { opacity: 0, x:-50 },
        visible: { opacity: 1, x: 0 }
      }}
      className='w-1/2 lg:w-1/4'>
        <img src={milkbottles} alt="" className='hidden lg:flex' />
        <img src={milkbottle} alt="" className='flex lg:hidden' />
      </motion.div>

      {/* the second image */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount:0.5}}
      transition={{ delay:0.3, duration:0.5 }}
      variants={{
        hidden: { opacity: 0, x:-40 },
        visible: { opacity: 1, x: 0 }
      }}
      className='w-1/2 lg:w-1/4'>
        <img src={orange} alt="" className='hidden lg:flex' />
        <img src={oranges} alt="" className='flex lg:hidden' />
      </motion.div>

      {/* third image */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount:0.5}}
      transition={{ delay:0.6, duration:0.5 }}
      variants={{
        hidden: { opacity: 0, x:40 },
        visible: { opacity: 1, x: 0 }
      }}
      className='w-1/2 lg:w-1/4'>
        <img src={cone} alt="" className='hidden lg:flex' />
        <img src={cones} alt="" className='flex lg:hidden' />
      </motion.div>

      {/* the fourth one */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once:true, amount:0.5}}
      transition={{ delay:0.9, duration:0.5 }}
      variants={{
        hidden: { opacity: 0, x:50 },
        visible: { opacity: 1, x: 0 }
      }}
      className='w-1/2 lg:w-1/4'>
        <img src={sugarcubes} alt="" className='hidden lg:flex' />
        <img src={sugarcube} alt="" className='flex lg:hidden' />
      </motion.div>

    </div>
  )
}

export default Products