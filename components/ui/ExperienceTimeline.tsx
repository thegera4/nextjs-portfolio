import { Button, Timeline } from 'flowbite-react';
import { HiCalendar } from 'react-icons/hi';

/* 
 {
    title: "Frontend Developer",
    company: "Financiera Independencia",
    date: "Nov 2022 - Present",
    summary: [
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    image: "/images/findeplogo.jpg",
  },
*/

const ExperienceTimeline: React.FC = () => {
    return (
        <article>
            <Timeline horizontal>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>Oct 2010 - May 2011</Timeline.Time>
                    <Timeline.Title className='text-[#1ff81f]'>
                        Automation Programmer
                    </Timeline.Title>
                    <Timeline.Body className='text-white'>
                        - PLC and HMI programming for different projects.<br/>
                        - Support to customers in their sites with technical issues.<br/>
                        - Project: New touch control panel for a John Deere plant<br/>
                        - Project: PLC substitution for a Johnson Controls plant <br/>
                        - Project: SCADA application new features in VB6 at Johnson Controls plant <br/>
                        - Project: PLC programming for a assembly lines at Johnson Controls plant <br/>
                        - Electrical schematic design for different projects. <br/>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>May 2011 - Nov 2022</Timeline.Time>
                    <Timeline.Title className='text-[#1ff81f]'>
                        Several NON-IT positions
                    </Timeline.Title>
                    <Timeline.Body className='text-white'>
                        - Line Technician at LALA.<br/>
                        - Machining Process Engineer at John Deere.<br/>
                        - Machining Process Engineer  at Delphi Diesel Systems.<br/>
                        - Automotive Quality Engineer at PKC Group.<br/>
                        - Process and Quality Engineer at Henniges Automotive. <br/>
                        - Automotive Senior Quality Engineer at Motherson Group. <br/>
                        - Manufacturing Supervisor at SMP Automotive Alambama. <br/>
                        - Teacher at UANE and UAC. <br/>
                        - Ads Assesor at Telus International.
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                    <Timeline.Time>Nov 2022 -  
                        <span className="ml-1 items-center justify-center p-0.5 font-medium relative text-gray-900 bg-white border border-gray-200 rounded-lg">
                            Current
                        </span>
                    </Timeline.Time>
                    <Timeline.Title className='text-[#1ff81f]'>
                        Frontend Developer
                    </Timeline.Title>
                    <Timeline.Body className='text-white'>
                        - Create a scalable and maintainable codebase.<br/>
                        - Apply scrum methodologies.<br/>
                        - Design UI and new features for applications.<br/>
                        - Deploy applications using Google Cloud Services.<br/>
                        - Write unit tests for new features and bug fixes. <br/>
                        - Write documentation for new features and bug fixes.<br/>
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
            <div className='flex '>
                <Button color="gray">
                    Download CV
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                        />
                    </svg>
                </Button>
            </div>
        </article>
    )
}

export default ExperienceTimeline



