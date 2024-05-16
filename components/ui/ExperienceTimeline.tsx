import { Timeline } from 'flowbite-react';
import { Translate } from '@/types';
import CV from '../../public/assets/CV Juan Gerardo eng v8.pdf'

const ExperienceTimeline: React.FC<Translate> = ({translate}) => {
    return (
        <article>
            <Timeline >
                <Timeline.Item>
                    <Timeline.Point/>
                    <Timeline.Content>
                    <Timeline.Time>Nov 2022 -  
                        <span className="ml-1 items-center justify-center p-0.5 font-medium relative text-gray-900 bg-white border border-gray-200 rounded-lg">
                            {translate('Current')}
                        </span>
                    </Timeline.Time>
                    <Timeline.Title className='text-[#2bff2b] sm:text-xl'>
                        {translate('FrontendDeveloper')}
                    </Timeline.Title>
                    <Timeline.Body className='text-white sm:text-lg sm:block'>
                        <ul className='list-disc list-inside'>
                            <li>{translate('CreateCodebase')}</li>
                            <li>{translate('ApplyScrum')}</li>
                            <li>{translate('DeployGCP')}</li>
                            <li>{translate('WriteTests')}</li>
                            <li>{translate('WriteDocs')}</li>
                        </ul>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point/>
                    <Timeline.Content>
                    <Timeline.Time>May 2011 - Nov 2022</Timeline.Time>
                    <Timeline.Title className='text-[#2bff2b] sm:text-xl'>
                        {translate('NonIT')}
                    </Timeline.Title>
                    <Timeline.Body className='text-white lg:text-lg sm:text-lg sm:block'>
                        <ul className='list-disc list-inside'>
                            <li>{translate('AutomationProgrammer')}</li>
                            <li>{translate('LALA')}</li>
                            <li>{translate('MJD')}</li>
                            <li>{translate('DELPHI')}</li>
                            <li>{translate('PKCQE')}</li>
                            <li>{translate('HENNIGES')}</li>
                            <li>{translate('MOTHERSON')}</li>
                            <li>{translate('SMP')}</li>
                            <li>{translate('TEACHER')}</li>
                            <li>{translate('ADSAssesor')}</li>
                        </ul>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            <div className="flex justify-center mt-2">
                    <span className="flex items-center justify-center h-12 w-40 p-1 font-medium relative">
                        <a href={CV} download className="flex items-center">
                            <span className="flex items-center text-[#2bff2b] hover:animate-bounce">
                                {translate('DownloadCV')}
                                <i>
                                    <svg 
                                        className="w-6 h-6 ml-2" 
                                        aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 20 19"
                                    >
                                        <path 
                                            stroke="currentColor" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                                        />
                                    </svg>
                                </i>
                            </span>
                            
                        </a>
                    </span>
            </div>
        </article>
    )
}
export default ExperienceTimeline