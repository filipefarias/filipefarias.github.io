import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectsChart.css'

function ProjectsChart(): JSX.Element {
    return (
        <div className="projects-chart">
            <ProjectCard title='Personal Portfolio' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/Photo_350_350.png'path='https://filipefarias.github.io/' github='https://github.com/filipefarias/filipefarias.github.io' description='Created using Vite + TypeScript + React. Posted using Github Pages.'/>
        </div>
    )
}

export default ProjectsChart