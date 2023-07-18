import './SkillsChart.css'
import SkillCard from '../SkillCard/SkillCard'

function SkillsChart(): JSX.Element {
    return (
        <div className="skills-chart">
            <h2 className="skills-title">Skills</h2>
            <hr />
            <div className="skills-cards">
                <div className="dev-skills">
                    <h2 className="dev-title">Dev</h2>
                    <hr />
                    <div className="dev-cards">
                        <SkillCard title='HTML 5' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/html5.png' alt='html 5 logo' />
                        <SkillCard title='CSS 3' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/CSS.png' alt='css 3 logo' />
                        <SkillCard title='JavaScript' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/javascript.jpg' alt='javascript logo' />
                        <SkillCard title='TypeScript' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/typescript.png' alt='typescript logo' />
                        <SkillCard title='React' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/react.jpg' alt='react logo' />
                        <SkillCard title='Vue JS' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/Vue.png' alt='vue js logo' />
                        <SkillCard title='Bootstrap' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/bootstrap.jpg' alt='bootstrap logo' />
                        <SkillCard title='Node JS' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/node.jpg' alt='node js logo' />
                        <SkillCard title='Express' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/express.png' alt='express logo' />
                        <SkillCard title='MySQL' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/mysql.png' alt='mysql logo' />
                        <SkillCard title='Postgre SQL' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/PostGRE-SQL.png' alt='postgre sql logo' />
                        <SkillCard title='Mongo DB' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/MongoDB.png' alt='mongo db logo' />
                    </div>
                </div>
                <div className="industrial-skills">
                    <h2 className="industrial-title">Industrial</h2>
                    <hr />
                    <div className="industrial-cards">
                        <SkillCard title='PLC' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/PLCS.png' alt='plcs' />
                        <SkillCard title='HMI' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/HMI.png' alt='hmis' />
                        <SkillCard title='Robots' img='https://pub-a3d04e0c7f6147c7a44026d0942ef22c.r2.dev/robots.jpg' alt='industrial robots line production' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsChart
