import './EducationCard.css'

interface Props {
    title: string,
    university: string,
    path: string,
    img: string,
    finished: number,
    description: string
}

function EducationCard(props: Props): JSX.Element {
    return (
        <div className="education-card">
            <a href={props.path} className="course-link" target='_blank'>
                <img src={props.img} alt="Course Imgage" className="course-img" />
                <h2 className="course-title">{props.title}</h2>
            </a>
            <h3 className="course-university">{props.university}</h3>
            <div className="course-completion">
                <i className="fa-solid fa-user-graduate"></i>
                {props.finished ? props.finished : 'In Progress'}
            </div>
            <p className="course-description">
                {props.description}
            </p>
        </div>
    )
}

export default EducationCard