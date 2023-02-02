import SectionTitle from '../reusable/SectionTitle'
import ContactForm from '../ui/ContactForm'
import { DevicePhoneMobileIcon, EnvelopeIcon } from '@heroicons/react/24/solid'


type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <SectionTitle title='Get in touch' />
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          What can I do for you?{" "} 
          <span className='decoration-[#16ac16]/50 underline'>
            Let me know.
          </span>
        </h4>
        <div className='flex flex-row items-center justify-center mx-auto'>
          <div className='flex items-center space-x-5 mr-5'>
            <DevicePhoneMobileIcon className='text-[#16ac16] h-7 w-7 animate-pulse'/>
            <p className='text-2xl font-semibold'>+52-87-12-75-95-53</p>
          </div>
          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#16ac16] h-7 w-7 animate-pulse'/>
            <p className='text-2xl font-semibold'>thegera4@hotmail.com</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactMe