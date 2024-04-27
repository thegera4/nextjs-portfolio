import React from 'react'
import { motion } from "framer-motion"

const BackgroundCircles: React.FC = () => {
  return (
    <motion.div 
      className='relative flex justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      data-testid='background-circles'
    >
      <div className='absolute border border-[#747373] rounded-full h-[200px] w-[200px] mt-52 animate-ping 
      xs:mt-32'
      />
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] mt-52 absolute
      xs:mt-32'
      />
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] mt-52 absolute
      xs:mt-32 xs:h-[345px] xs:w-[345px]
      sm:h-[500px] sm:w-[500px]'
      />
      <div className='rounded-full border border-[#1ff81f] opacity-20 h-[650px] w-[650px] mt-52 absolute animate-pulse
      xs:mt-32 xs:h-[400px] xs:w-[400px]
      sm:h-[650px] sm:w-[650px]'
      />
      <div className='rounded-full border border-[#333333] h-[800px] w-[800px] mt-52 absolute
      xs:mt-32 xs:h-[450px] xs:w-[450px]
      sm:h-[800px] sm:w-[800px]'
      />
    </motion.div>
  )
}

export default BackgroundCircles