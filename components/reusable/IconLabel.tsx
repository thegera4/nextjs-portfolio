import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { HomeIcon } from '@heroicons/react/24/solid';

type Props = {
  icon: string;
  label: string;
  link: string;
  contact: () => void;
}

function IconLabel({ icon, label, link, contact}: Props) {

  let iconComponent;

  switch(icon) {
    case 'home':
      iconComponent = <HomeIcon className='h-6 w-6 text-white mr-2
      lg:visible md:visible sm:visible xs:invisible 2xs:invisible' />
      break;
    case 'email':
      iconComponent = <SocialIcon className='cursor-pointer' 
      network={icon} fgColor='white' bgColor='transparent'/>
      break;
    default:
      return null;
  }

  return (
    <div onClick={contact}> 
      {iconComponent}
      {/*<Link href={link}>*/}
        <p className='uppercase md:inline-flex text-sm text-white cursor-pointer md:visible xs:invisible 2xs:invisible'>
          {label}
        </p>
      {/*</Link>*/}
    </div>
  )
}

export default IconLabel