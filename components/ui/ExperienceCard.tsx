import { motion } from 'framer-motion'
import Image from 'next/image'
import TechIcon from '../reusable/TechIcon'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <div>
      <article className='flex flex-col rounded-lg items-center space-y-7 
      flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
      bg-[#292929] p-10 hover:opacity-100 opacity-40 duration-200 
      overflow-hidden cursor-default'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src='/images/profile.png'
          alt='Me'
          className='rounded-full w-32 h-32 xl:w-[200px] 
          xl:h-[200px] object-cover object-center'
        />
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>MY POSITION</h4>
          <p className='font-bold text-2xl mt-1'>COMPANY NAME</p>
          <div className='flex space-x-2 my-2'>
            <TechIcon path='/images/js.png' alt='JavaScript' />
            <TechIcon path='/images/js.png' alt='JavaScript' />
            <TechIcon path='/images/js.png' alt='JavaScript' />
          </div>
          <p className='uppercase py-3 text-gray-300'>OCT 2019 - OCT 2020</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default ExperienceCard