import "./ExperienceCard.css";

interface Props {
    title: string,
    company: string,
    starts: number,
    ends: number,
    description: string
}

function ExperienceCard(props: Props): JSX.Element {
    return (
        <div className="experience-card">
            <div className="job-info">
                <h2 className="job-title">{props.title}</h2>
                <h3 className="job-company">{props.company}</h3>
            </div>
            <div className="job-time">
                <h2 className="start-year"><i className="fa-solid fa-angles-up"></i> {props.starts}</h2>
                <h2 className="end-year"><i className="fa-solid fa-angles-down"></i> {props.ends}</h2>
            </div>
            <p className="job-description">{props.description}</p>
        </div>
    )
}

export default ExperienceCard