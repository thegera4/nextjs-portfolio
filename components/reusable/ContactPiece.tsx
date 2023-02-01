import { DevicePhoneMobileIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {
  icon: string,
  text: string
}

function ContactPiece({ icon, text }: Props) {

  let element;

  switch(icon){
    case "phone":
      element = <DevicePhoneMobileIcon 
                className='text-[#16ac16] h-7 w-7 animate-pulse'/>
      break
    case "email":
      element = <EnvelopeIcon 
                className='text-[#16ac16] h-7 w-7 animate-pulse'/>
      break
    case "pin":
      element = <MapPinIcon 
                className='text-[#16ac16] h-7 w-7 animate-pulse'/>
      break
    default:
      return
  }

  return (
    <>
      <div className='flex items-center space-x-5'>
        {element}
        <p className='text-2xl font-semibold'>{text}</p>
      </div>
    </>
  )
}

export default ContactPiece