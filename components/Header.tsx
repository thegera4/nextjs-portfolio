import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl 
    mx-auto z-20 xl:items-center p-5'>
      <motion.div 
        className='flex flex-row items-center'
        initial={{ x: -500, opacity: 0, scale:0.5}}
        animate={{ x: 0, opacity: 1, scale:1}}
        transition={{ duration: 1 }}
      >
        <SocialIcon 
          url="https://twitter.com/thegera4" 
          bgColor='transparent'
          fgColor='gray'
        />
        <SocialIcon 
          url="https://github.com/thegera4"
          bgColor='transparent'
          fgColor='gray'
        />
        <SocialIcon 
          url="https://facebook.com/juangerardo.medellinibarra/"
          bgColor='transparent'
          fgColor='gray'
        />
        <SocialIcon 
          url="https://linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/"
          bgColor='transparent'
          fgColor='gray'
        />
      </motion.div>
      <motion.div 
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        initial={{ x: 500, opacity: 0, scale:0.5}}
        animate={{ x: 0, opacity: 1, scale:1}}
        transition={{ duration: 1 }}
      >
        <SocialIcon 
          className='curso-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Contact me
        </p>
      </motion.div>
    </header>
  )
}

export default Header