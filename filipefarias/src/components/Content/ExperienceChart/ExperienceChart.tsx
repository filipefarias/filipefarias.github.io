import './ExperienceChart.css'
import ExperienceCard from '../ExperienceCard/ExperienceCard'

function ExperienceChart(): JSX.Element {
    return <div className="experience-chart">
         <div className="time-line">
            <span>2013</span>
            <div className="line"></div>
            <span>...</span>
         </div>
        <div className="exp-1">
            <ExperienceCard title="Programmer" company="Snap Automation LLC" starts={2013} ends={2018} description="Here I started to learn how is to be a programmer. And I loved it. The enviroment of this position gave me the skills to create a fast and clean code for all applications. I started to program in low level languages (Ladder, STL, SCL, Graph) for PLCs (Siemens, Rockwell and Bechoff) and industrial Robots of the main manufacturers (Fanuc, ABB and KUKA)." />
        </div>
        <div className="exp-2">
            <ExperienceCard title="Programmer" company="SPI" starts={2018} ends={2019} description="Here I started to work in larger projects, and larger teams. I learned how to organize myself and be organized in teams for everything we need to have the best results. I learned a specific software standard for a client, which invite me to work with them some time after." />
        </div>
        <div className="exp-3">
            <ExperienceCard title="Maintenance Technician" company="General Motors" starts={2019} ends={2021} description="This is the client who invited me! Here I improved my troubleshooting skills. Also, I learned how big companies works and develop my team work." />
        </div>
        <div className="exp-4">
            <ExperienceCard title="Automation Specialist" company="FF Automation" starts={2021} ends={0} description="After 2 years I decided return to what I really love to do: programming. And I started to study high level languages. So I started to learn about web development and now I'm starting to build my portfolio. This Github page is my first personal project. I developed it with Vite + React + TypeScript." />
        </div>
       
    </div>
}

export default ExperienceChart