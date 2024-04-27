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
      className='h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration:1.5 }}
    >
      <SectionTitle title={locale === 'en' ? 'PROJECTS' : 'PROYECTOS' } />
      <div className='relative max-w-6xl flex overflow-x-scroll overflow-y-hidden 
       z-20 scrollbar lg:mt-40 md:mt-20 sm:mt-56'>
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
              <ProjectCard project={project} />
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