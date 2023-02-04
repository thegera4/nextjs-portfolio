import Head from 'next/head'
import Header from '@/components/ui/Header'
import Hero from '@/components/views/Hero'
import About from '@/components/views/About'
import WorkExperience from '@/components/views/WorkExperience'
import Skills from '@/components/views/Skills'
import Projects from '@/components/views/Projects'
import ContactMe from '@/components/views/ContactMe'
import IconLabel from '@/components/reusable/IconLabel'
import data from '@/data/projects.json'
import Link from 'next/link'

export default function Home(props: any) {

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin
    scrollbar-thumb-[#16ac16] scrollbar-track-[rgb(36,36,36)]
    scrollbar-thumb-rounded'
    >
      <Head>
        <title>Juan Gerardo Medellin Ibarra Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      <section id="projects" className='snap-start'>
        <Projects projects={props.projects} />
      </section>
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center z-9999999'>
            <IconLabel icon="home" label="Home" link='#hero' />
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const projects = data.projects
  return {
    props: {
      projects
    }
  }
}