import SectionTitle from '../reusable/SectionTitle'
import ContactForm from '../ui/ContactForm'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { Translate, Inputs } from '@/types'

const ContactMe: React.FC<Translate> = ({ translate}) => {

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <SectionTitle title={translate('getInTouch')} />
      <div className='flex flex-col space-y-10 2xs:space-y-5'>
        <h4 className='text-4xl font-semibold text-center xs:text-sm md:visible 
        lg:visible xs:invisible 2xs:invisible 2xs:text-sm md:text-4xl'>
          {translate('needHelp?')}{" "} 
          <span className='decoration-[#16ac16]/50 underline'>
            {translate('letMeKnow')}
          </span>
        </h4>
        <div className='flex flex-row items-center justify-center mx-auto
        lg:flex-row md:flex-row xs:flex-col 2xs:flex-col'>
          <div className='flex items-center space-x-5 mr-5'>
            <DevicePhoneMobileIcon className='text-[#16ac16] h-7 w-7 animate-pulse'/>
            <p className='text-2xl lg:text-2xl md:text-2xl xs:text-sm 2xs:text-sm font-semibold'>
              +52-87-12-75-95-53
            </p>
          </div>
          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#16ac16] h-7 w-7 animate-pulse'/>
            <p className='text-2xl lg:text-2xl md:text-2xl 2xs:text-sm font-semibold'>
              thegera4@hotmail.com
            </p>
          </div>
        </div>
        <ContactForm translate={translate} name={''} email={''} subject={''} message={''}/>
      </div>
    </div>
  )
}

export default ContactMe