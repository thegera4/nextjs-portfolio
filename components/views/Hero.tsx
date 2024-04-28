import Image from 'next/image'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from '../ui/BackgroundCircles'

function Hero({translate}: any) {
  const [text] = useTypewriter({
    words: [
      translate('hi'),
      translate('engineer'),
      translate('musician'),
      //translate('techEnthusiast'),
      translate('gamer'),
    ],
    loop: 0,
    deleteSpeed: 40,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src='/images/profile.png'
        alt='Juan Gerardo'
        width={150}
        height={150}
        className='rounded-full relative h-32 w-32 mx-auto object-cover 
          xs:w-64 xs:h-64 xs:top-[-95px]'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-white pb-2 tracking-[10px]
          xs:tracking-[6px] xs:mt-[-40px] md:text-xl lg:text-2xl xlg:text-2xl'
        >
          {translate('fullstackDev')}
        </h2>
        <h1 className='text-5xl lg:text-4xl font-semibold px-10 xs:text-[1.5rem]'>
          <span className='mr-3'> {text} </span>
          <Cursor cursorColor='#1ff81f'/>
        </h1>
        <div className='pt-5 xs:visible xs:flex 2xs:invisible'>
          <Link href="#about" className='heroButton lg:text-xl xlg:text-xl md:text-lg sm:px-6 xs:px-1'>
            {translate('about')}
          </Link>
          <Link href="#experience" className='heroButton lg:text-xl xlg:text-xl md:text-lg sm:px-6 xs:pl-2 xs:pr-1'>
            {translate('experience')}
          </Link>
          <Link href="#skills" className='heroButton lg:text-xl xlg:text-xl md:text-lg sm:px-6 xs:pl-2 xs:pr-1'>
            {translate('skills')}
          </Link>
          <Link href="#projects" className='heroButton lg:text-xl xlg:text-xl md:text-lg sm:px-6 xs:px-1'>
            {translate('projects')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero