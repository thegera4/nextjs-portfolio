import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ProjectCardInfo } from 'types'
import PulsatingArrow from '../reusable/PulsatingArrow'

const ProjectCard: React.FC<ProjectCardInfo> = ({ project, projectIndex }) => {
  const router = useRouter();
  const locale = router.locale || 'en';

  return (
    <div className='max-w-screen flex-shrink-0 snap-center flex flex-col space-y-5
    items-center justify-center p-20 h-screen 
    xs:mt-32'
    >
      <Image
        src={project.image}
        alt={project.title}
        width={project.mobile ? 200 : 500}
        height={project.mobile ? 400 : 300}
        className={project.mobile ?
          'xs:w-[100px] xs:h-[200px] md:w-[150px] md:h-[300px] lg:w-[150px] lg:h-[300px] object-fit rounded-md' :
          'xs:w-[350px] xs:h-[200px] md:w-[450px] md:h-[300px] lg:w-[500px] object-contain rounded-md'
        }
      />
      <div className='flex items-center'>
        {projectIndex > 0 && <PulsatingArrow side='left' />} {/* mostrar los arrows en lg, en xl ya no*/}
        <h4 className='text-4xl font-semibold text-center xs:text-2xl 2xs:text-2xl'>
          <span className='underline decoration-[#16ac16]/50'>
            {project.title}
          </span>
        </h4>
        {projectIndex < 19 && <PulsatingArrow side='right' />} {/* adjust number if you add or remove projects */}
      </div>
      { project.technologies &&
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
        { project.url &&
          <Link href={project.url} className='projectButton' target='_blank'>
            { locale === 'en' ?
              project.mobile ? 'Download' : 'See Demo' :
              project.mobile ? 'Descargar' : 'Ver Demo'
            }
          </Link>
        }
        <Link href={project.sourceCode} className='projectButton' target='_blank'>
          { locale === 'en' ?
            project.technologies ? 'Source Code' : 'Github profile' :
            project.technologies ? 'Código Fuente' : 'Perfil de Github'
          }
        </Link>
      </div>
      <p className='text-lg text-center max-w-7xl lg:text-lg lg:max-w-4xl
      md:text-left md:max-w-2xl md:text-lg xs:text-sm xs:max-w-xs xs:text-left'
      >
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;