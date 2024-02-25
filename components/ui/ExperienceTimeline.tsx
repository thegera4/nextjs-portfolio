import { Timeline } from 'flowbite-react';
import { Translate } from '@/types';
import CV from '../../public/assets/CV Juan Gerardo eng v7.pdf'

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
                    <Timeline.Title className='text-[#2bff2b]'>
                        {translate('FrontendDeveloper')}
                    </Timeline.Title>
                    <Timeline.Body className='text-white lg:text-lg sm:text-sm sm:block xs:hidden'>
                        - {translate('CreateCodebase')}<br/>
                        - {translate('ApplyScrum')}<br/>
                        - {translate('DesignUI')}<br/>
                        - {translate('DeployGCP')}<br/>
                        - {translate('WriteTests')}<br/>
                        - {translate('WriteDocs')}<br/>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point/>
                    <Timeline.Content>
                    <Timeline.Time>May 2011 - Nov 2022</Timeline.Time>
                    <Timeline.Title className='text-[#2bff2b]'>
                        {translate('NonIT')}
                    </Timeline.Title>
                    <Timeline.Body className='text-white lg:text-lg sm:text-sm sm:block xs:hidden'>
                        - {translate('AutomationProgrammer')}<br/>
                        - {translate('LALA')}<br/>
                        - {translate('MJD')}<br/>
                        - {translate('DELPHI')}<br/>
                        - {translate('PKCQE')}<br/>
                        - {translate('HENNIGES')}<br/>
                        - {translate('MOTHERSON')} <br/>
                        - {translate('SMP')}<br/>
                        - {translate('TEACHER')}<br/>
                        - {translate('ADSAssesor')}<br/>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            <div className="flex justify-center mt-2">
                <div className="flex items-center justify-center h-12 w-40 p-1 font-medium relative text-gray-900 bg-white border
                border-gray-200 rounded-lg">
                    <span className="flex text-gray-800 dark:text-white">
                        <a href={CV} download className="flex items-center">
                            <span>{translate('DownloadCV')}</span>
                            <svg 
                                className="w-6 h-6 text-gray-800 dark:text-white" 
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
                        </a>
                    </span>
                </div>
            </div>
        </article>
    )
}
export default ExperienceTimeline