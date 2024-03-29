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
        className='rounded-full relative h-32 w-32 mx-auto object-cover md:w-64 md:h-64 md:top-[-55px]'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]
        2xs:tracking-[5px] md:text-xl lg:text-2xl xlg:text-2xl'>
          {translate('fullstackDev')}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 2xs:text-[1.8rem]'>
          <span className='mr-3'> {text} </span>
          <Cursor cursorColor='#1ff81f'/>
        </h1>
        <div className='pt-5 xs:visible 2xs:invisible xs:flex xs:ml-7'>
          <Link href="#about" className='heroButton lg:text-xl xlg:text-xl
           md:text-lg xs:pl-1 xs:pr-1'>
            {translate('about')}
          </Link>
          <Link href="#experience" className='heroButton lg:text-xl xlg:text-xl md:text-lg xs:pl-2 xs:pr-1'>
            {translate('experience')}
          </Link>
          <Link href="#skills" className='heroButton lg:text-xl xlg:text-xl md:text-lg xs:pl-2 xs:pr-1'>
            {translate('skills')}
          </Link>
          <Link href="#projects" className='heroButton lg:text-xl xlg:text-xl md:text-lg xs:pl-1 xs:pr-1'>
            {translate('projects')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero