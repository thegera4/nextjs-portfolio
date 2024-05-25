import { SocialIcon } from 'react-social-icons';
import { Translate } from "@/types"

const ContactMe: React.FC<Translate> = ({ translate }) => {

  return (
    <div className='mb-56 flex relative flex-col text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center xs:mt-40'>
      <div className='flex flex-col space-y-10'>
        <h4 className='md:text-4xl font-semibold text-center xs:text-2xl'>
            {translate('whatCanIdo')}{" "} 
          <span className='decoration-[#16ac16]/50 underline'>
            {translate('letMeKnow')}
          </span>
        </h4>
        <div className='items-center justify-center mx-auto space-y-6'>
          <div className='flex items-center md:space-x-5 xs:space-x-1'>
            <SocialIcon 
                className='animate-pulse' 
                network='email'
                //url="thegera4@hotmail.com" 
                //target='_blank' 
                bgColor='transparent' 
                fgColor='#16ac16'
            />
            <p className='md:text-2xl font-semibold xs:text-sm'>thegera4@hotmail.com</p>
          </div>
          <div className='flex items-center md:space-x-5 xs:space-x-1'>
            <SocialIcon 
                className='animate-pulse' 
                network='github'
                //url="https://github.com/thegera4" 
                //target='_blank' 
                bgColor='transparent' 
                fgColor='#16ac16'
            />
            <p className='md:text-2xl font-semibold xs:text-sm'>thegera4</p>
          </div>
          <div className='flex items-center md:space-x-5 xs:space-x-1'>
            <SocialIcon 
                className='animate-pulse' 
                network='linkedin'
                //url="https://linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/" 
                //target='_blank' 
                bgColor='transparent' 
                fgColor='#16ac16' 
            />
            <p className='md:text-2xl font-semibold xs:text-sm'>Juan Gerardo Medellin Ibarra</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe