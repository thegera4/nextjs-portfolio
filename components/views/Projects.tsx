import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../reusable/SectionTitle'
import { getProjects } from '../helpers/fetchers'

function Projects(props: any) {

  console.log(props)
  /* asi si funciona
  useEffect(() => {
    //call the api to get the projects
    async function fetchData() {
      const response = await fetch('/api/projects')
      const data = await response.json()
      console.log(data)
    }
    fetchData()
  }, [])
  */

  return (
    <motion.div 
      className='h-screen relative flex overflow-hidden flex-col text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration:1.5 }}
    >
      <SectionTitle title='Projects' />
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#16ac16]/80'>
        
      </div>
      <div className='w-full absolute top-[30%] bg-[#16ac16]/10 left-0 
      h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects

//TODO: implement static props to get the projects from the api