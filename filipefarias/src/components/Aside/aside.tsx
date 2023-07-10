import React from "react";
import './Aside.css'
import ProfilePanel from "./profilePanel/profilePanel"

function Aside(): JSX.Element {
    return <aside className="site-aside">
        <ProfilePanel />
    </aside>
}

export default Aside