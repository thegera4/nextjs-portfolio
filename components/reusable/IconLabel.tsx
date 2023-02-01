import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { HomeIcon } from '@heroicons/react/24/solid';

type Props = {
  icon: string;
  label: string;
  link: string;
}

function IconLabel({ icon, label, link}: Props) {

  let iconComponent;

  switch(icon) {
    case 'home':
      iconComponent = <HomeIcon className='h-6 w-6 text-gray-400 mr-2' />
      break;
    case 'email':
      iconComponent = <SocialIcon className='cursor-pointer' network={icon}
                        fgColor='gray' bgColor='transparent'/>
      break;
    default:
      return null;
  }

  return (
    <>
      {iconComponent}
      <Link href={link}>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          {label}
        </p>
      </Link>
    </>
  )
}

export default IconLabel