import './ProjectCard.css'

interface Props {
    title: string,
    path: string,
    github: string,
    img: string,
    description: string
}

function ProjectCard(props: Props): JSX.Element {
    return (
        <div className="project-card">
            <a href={props.path} className="project-link" target='_blank'>
                <img src={props.img} alt="Project Imgage" className="project-img" />
                <h2 className="project-title">{props.title}</h2>
            </a>
            <p className="project-description">
                {props.description}
            </p>
            <a href={props.github} className="git-link" target='_blank'>
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    )
}

export default ProjectCard