import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import IconLabel from '../reusable/IconLabel';
import LanguageSelector from './LanguageSelector';

type Translate = {
  translate: (key: string) => string
}

const Header: React.FC<Translate> = ({ translate }) => {
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
          url="https://github.com/thegera4"
          target='_blank'
          bgColor='transparent'
          fgColor='gray'
        />
        <SocialIcon 
          url="https://linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/"
          target='_blank'
          bgColor='transparent'
          fgColor='gray'
        />
        <SocialIcon
          url="https://jgmedellin-blog.vercel.app/"
          target='_blank'
          bgColor='transparent'
          fgColor='gray'
        />
      </motion.div>
      <motion.div 
        className='flex flex-row items-center text-gray-300' 
        initial={{ x: 500, opacity: 0, scale:0.5}}
        animate={{ x: 0, opacity: 1, scale:1}}
        transition={{ duration: 1 }}
      >
        <IconLabel icon="email" label={translate('contact')} link='#contact' />
        <LanguageSelector />
      </motion.div>
    </header>
  )
}

export default Header