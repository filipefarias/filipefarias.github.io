// import React from "react";
import './personalInfo.css'
import Contact from "../Contact/contact";

function personalInfo(): JSX.Element {
    return <div className="personal-info">
        <h2>Filipe<span>Farias</span></h2>
        <p>Full Stack Developer</p>
        <Contact />
    </div>
}

export default personalInfo