//import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ProjectCardInfo } from 'types'
//import { Card } from 'flowbite-react';

const ProjectCard: React.FC<ProjectCardInfo> = ({ project }) => {
  const router = useRouter();
  const locale = router.locale || 'en';

  return (
    <div className='max-w-screen flex-shrink-0 snap-center flex flex-col space-y-5
    items-center justify-center p-20 md:p-44 h-screen md:top-[0px] sm:top-[0px] 
    xs:relative xs:top-[50px] 2xs:relative 2xs:top-[550px]'>
      <Image
        src={project.image}
        alt={project.title}
        width={project.mobile ? 200 : 500}
        height={project.mobile ? 400 : 300}
        className={
          project.mobile ?
            'xs:w-[100px] xs:h-[200px] md:w-[150px] md:h-[300px] lg:w-[150px] lg:h-[300px] object-fit rounded-md' :
            'xs:w-[350px] xs:h-[200px] md:w-[450px] md:h-[300px] lg:w-[500px] object-contain rounded-md'
        }
      />
      <h4 className='text-4xl font-semibold text-center xs:text-2xl 2xs:text-2xl'>
        <span className='underline decoration-[#16ac16]/50'>
          {project.title}
        </span>
      </h4>
      {project.technologies &&
        <div className='flex items-center space-x-2 '>
          {project.technologies.map((tech, index) => (
            <Image
              key={index}
              src={tech.icon}
              alt={tech.name}
              width={30}
              height={30}
              className='object-contain xs:w-[20px] xs:h-[20px] xs:-ml-5 2xs:-ml-5 2xs:w-[15px] 2xs:h-[15px]'
            />
          ))}
        </div>
      }
      <div className='flex space-x-5'>
        {
          project.url &&
          <Link
            href={project.url}
            className='projectButton'
            target='_blank'
          >
            {
              locale === 'en' ?
                project.mobile ? 'Download' : 'See Demo' :
                project.mobile ? 'Descargar' : 'Ver Demo'
            }
          </Link>
        }
        <Link
          href={project.sourceCode}
          className='projectButton'
          target='_blank'
        >
          {
            locale === 'en' ?
              project.technologies ? 'Source Code' : 'Github profile' :
              project.technologies ? 'Código Fuente' : 'Perfil de Github'
          }
        </Link>
      </div>
      <p className='text-lg text-center lg:text-lg md:text-left md:text-sm sm:text-sm
      xs:text-sm max-w-7xl xlg:visible lg:visible md:visible sm:visible xs:invisible 2xs:invisible'>
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;

{/*<Card className="max-w-sm" imgSrc="../../public/images/" horizontal>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
  </Card>*/}