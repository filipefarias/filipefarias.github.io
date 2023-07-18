import './SkillCard.css'

interface Props {
    img: string,
    alt: string,
    title: string
}

function SkillCard(props: Props): JSX.Element {
    return (
        <div className="skill-card">
            <img src={props.img} alt={props.alt} className="skill-img" />
            <h3 className="skill-title">{props.title}</h3>
        </div>
    )
}

export default SkillCard