import Image from 'next/image'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './ui/BackgroundCircles'

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
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>
          FullStack Developer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'> {text} </span>
          <Cursor cursorColor='#16ac16'/>
        </h1>
        <div className='pt-5'>
          <Link href="#about" className='heroButton'>About</Link>
          <Link href="#experience" className='heroButton'>Experience</Link>
          <Link href="#skills" className='heroButton'>Skills</Link>
          <Link href="#projects" className='heroButton'>Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero