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
            <ExperienceCard title="Programmer" company="Snap Automation LLC" starts={2013} ends={2018} description="PFOKAkpoekfapdofkaspodfkaspodkfapsodkf dpfkaspdfkaspfk padkfpaso kfp askfp oaskfp oaskdfp aoskdfpaks dpfokasdpf kasdpofka spdofkaspdofk apsdofkaps dofk aspodfkaps dkfpadsokf padsokf pasokfp asodkfpa dsokf pasodkfp asokdfpaso kfpaskdf pasdk pfadkfp asdkfpsa " />
        </div>
        <div className="exp-2">
            <ExperienceCard title="Programmer" company="SPI" starts={2018} ends={2019} description="PFOKAkpoekfapdofkaspodfkaspodkfapsodkf dpfkaspdfkaspfk padkfpaso kfp askfp oaskfp oaskdfp aoskdfpaks dpfokasdpf kasdpofka spdofkaspdofk apsdofkaps dofk aspodfkaps dkfpadsokf padsokf pasokfp asodkfpa dsokf pasodkfp asokdfpaso kfpaskdf pasdk pfadkfp asdkfpsa " />
        </div>
        <div className="exp-3">
            <ExperienceCard title="Maintenance Technician" company="General Motors" starts={2019} ends={2021} description="PFOKAkpoekfapdofkaspodfkaspodkfapsodkf dpfkaspdfkaspfk padkfpaso kfp askfp oaskfp oaskdfp aoskdfpaks dpfokasdpf kasdpofka spdofkaspdofk apsdofkaps dofk aspodfkaps dkfpadsokf padsokf pasokfp asodkfpa dsokf pasodkfp asokdfpaso kfpaskdf pasdk pfadkfp asdkfpsa " />
        </div>
        <div className="exp-4">
            <ExperienceCard title="Automation Specialist" company="FF Automation" starts={2021} ends={0} description="PFOKAkpoekfapdofkaspod fkaspodkfapsodkf dpfkaspdfkaspfk padkfpaso kfp askfp oaskfp oaskdfp aoskdfpaks dpfokasdpf kasdpofka spdofkaspdofk apsdofkaps dofk aspodfkaps dkfpadsokf padsokf pasokfp asodkfpa dsokf pasodkfp asokdfpaso kfpaskdf pasdk pfadkfp asdkfpsa " />
        </div>
       
    </div>
}

export default ExperienceChart