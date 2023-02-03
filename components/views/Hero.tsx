import Image from 'next/image'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../ui/BackgroundCircles'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Gerardo",
      "I'm an engineer",
      "Amateur musician",
      "Tech enthusiast",
      "Gamer",
    ],
    loop: 0,
    deleteSpeed: 40,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src='/images/profile.png'
        alt='Juan Gerardo'
        width={100}
        height={100}
        className='rounded-full relative h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]
        2xs:tracking-[5px]'>
          FullStack Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 2xs:text-[1.8rem]'>
          <span className='mr-3'> {text} </span>
          <Cursor cursorColor='#16ac16'/>
        </h1>
        <div className='pt-5 xs:visible 2xs:invisible'>
          <Link href="#about" className='heroButton xs:pl-3 xs:pr-3'>
            About
          </Link>
          <Link href="#experience" className='heroButton xs:pl-3 xs:pr-3'>
            Experience
          </Link>
          <Link href="#skills" className='heroButton xs:pl-3 xs:pr-3'>
            Skills
          </Link>
          <Link href="#projects" className='heroButton xs:pl3 xs:pr3'>
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero