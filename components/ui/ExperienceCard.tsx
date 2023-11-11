import { motion } from 'framer-motion'
import { ExperienceCard } from '@/types'

const ExperienceCard: React.FC<ExperienceCard>  = ({ job }) => {

  return (
      <article className='flex flex-col rounded-lg items-center space-y-7 
      mt-20 flex-shrink-0 w-full md:h-[600px] bg-[#292929] p-5 
      hover:opacity-100 opacity-40 duration-200 cursor-default 
      2xs:opacity-100 xs:h-[320px] 2xs:h-[300px]'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={job.image}
          alt={job.company}
          className='w-64 h-32 xl:w-[320px] xl:h-[200px] object-contain object-center
          xs:w-[200px] xs:h-[130px] 2xs:w-[160px] 2xs:h-[100px]'/>
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light xs:text-[18px] xs:justify-center 
          xs:flex 2xs:text-sm 2xs:justify-center 2xs:flex'>
            {job.title}
          </h4>
          <p className='font-bold text-2xl mt-1 xs:text-sm xs:justify-center
          xs:flex 2xs:text-xs 2xs:justify-center 2xs:flex'>
            {job.company}
          </p>
          <p className='uppercase py-3 text-gray-300 xs:text-sm
          xs:justify-center xs:flex 2xs:text-sm 2xs:justify-center 2xs:flex
          md:-mb-1'>
            {job.date}
          </p>
          <ul className='list-disc space-y-4 ml-5 text-lg
           md:text-sm lg:visible md:visible
          xs:invisible 2xs:invisible'>
            {job.summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
  )
}

export default ExperienceCard