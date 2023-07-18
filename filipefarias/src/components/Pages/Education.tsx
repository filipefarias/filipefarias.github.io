import Content from "../Content/content"
import EducationChart from "../Content/EducationChart/EducationChart"
import SkillsChart from "../Content/SkillsChart/SkillsChart"

function Education(): JSX.Element {
    return <Content title="Education">
        <EducationChart />
        <SkillsChart />
    </Content>
}

export default Education