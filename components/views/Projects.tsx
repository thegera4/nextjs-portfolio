import { motion } from 'framer-motion'
import SectionTitle from '../reusable/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { CSSProperties } from "react"
import { useRouter } from 'next/router';

interface props {
  projects: {
    title: string,
    description: string,
    image: string,
    url: string,
    sourceCode: string,
    technologies: [
      {
        icon: string,
        name: string
      }
    ],
    mobile: boolean
  }[],
}

function Projects({ projects }: props) {
  const { locale } = useRouter()

  return (
    <motion.div 
      className='relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0 
      xl:mt-0 lg:mt-14 md:mt-4 sm:mt-8 xs:mt-24'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration:1.5 }}
    >
      <SectionTitle title={locale === 'en' ? 'PROJECTS' : 'PROYECTOS' } />
      <div className='relative max-w-6xl flex overflow-x-scroll overflow-y-hidden z-20 scrollbar 
      xl:mt-4 first-letter:lg:mt-[-50px] lg:mt-40 lg:mb-32 md:mt-0 sm:mt-5 xs:mt-[-60px]'>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          style={{
            '--swiper-navigation-color': '#16ac16',
            '--swiper-navigation-size': '3rem',
          } as CSSProperties}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} projectIndex={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full absolute top-[30%] bg-[#16ac16]/10 left-0 
      h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects