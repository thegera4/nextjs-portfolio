import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky ttop-0 flex items-start justify-between max-w-7xl 
    mx-auto z-20 xl:items-center p-5'>
      <div className='flex flex-row items-center'>
        <SocialIcon url="https://twitter.com/thegera4" />
        <SocialIcon url="https://twitter.com/thegera4" />
        <SocialIcon url="https://twitter.com/thegera4" />
      </div>
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
          className='curso-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Contact me
        </p>
      </div>
    </header>
  )
}

export default Header