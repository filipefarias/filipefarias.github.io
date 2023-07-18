import './EducationChart.css'
import EducationCard from '../EducationCard/EducationCard'

function EducationChart(): JSX.Element {
    return (
        <div className="education-chart">
            <h2 className="education-title">Education</h2>
            <hr/>
            <div className="education-cards">
                <EducationCard title='Industrial Automation' university='Faculdade de Tecnologia SENAI Porto Alegre' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/industrial-automation.jpg' path='https://www.senairs.org.br/cursos/graduacao-tecnologica/curso-superior-de-tecnologia-em-automacao-industrial'finished={2013} description=''/>
                <EducationCard title='JavaScript e TypeScript from Basic to Advanced' university='Udemy' img='https://img-b.udemycdn.com/course/240x135/2575266_c184_4.jpg' path='https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/'finished={2023} description=''/>
                <EducationCard title='Complete Modern Web with JavaScript 2022 + Projects' university='Udemy' img='https://img-b.udemycdn.com/course/480x270/1465244_ed1a_3.jpg' path='https://www.udemy.com/course/curso-web/'finished={2023} description=''/>
                <EducationCard title='React.Js and Next.Js (Intermedite and Advanced)' university='Udemy' img='https://img-b.udemycdn.com/course/480x270/3839636_0a4e.jpg' path='https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/'finished={0} description=''/>
            </div>
        </div>
    )
}

export default EducationChart
