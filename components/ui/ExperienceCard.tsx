import { motion } from 'framer-motion'

type Props = {
  job: {
    title: string
    company: string
    date: string
    summary: string[]
    image: string
  }
}

function ExperienceCard({ job }: Props) {
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
          src={job.image}
          alt={job.company}
          className='w-64 h-32 xl:w-[320px] xl:h-[200px] object-fit object-center'
        />
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>{job.title}</h4>
          <p className='font-bold text-2xl mt-1'>{job.company}</p>
          <p className='uppercase py-3 text-gray-300'>{job.date}</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            {job.summary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  )
}

export default ExperienceCard