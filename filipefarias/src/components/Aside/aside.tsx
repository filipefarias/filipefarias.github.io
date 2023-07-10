import React from "react";
import './Aside.css'
import ProfilePanel from "./profilePanel/profilePanel"
import Menu from "./Navigation/navigation"

function Aside(): JSX.Element {
    return <aside className="site-aside">
        <ProfilePanel />
        <Menu />
    </aside>
}

export default Aside