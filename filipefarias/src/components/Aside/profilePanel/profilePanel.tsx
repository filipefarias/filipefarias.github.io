import React from "react";
import './profilePanel.css'
import ProfileImage from "../profileImage/profileImage";
import PersonalInfo from "../personalInfo/personalInfo";

function profilePanel(): JSX.Element {
    return <div className="profile-panel">
        <ProfileImage />
        <PersonalInfo />
    </div>
}

export default profilePanel