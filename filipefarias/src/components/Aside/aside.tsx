// import React from "react";
import './Aside.css'
import ProfilePanel from "./profilePanel/profilePanel"
import Menu from "./Navigation/navigation"
import Social from "./Social/social";

function Aside(): JSX.Element {
    return <aside className="site-aside">
        <ProfilePanel />
        <Menu />
        <Social />
    </aside>
}

export default Aside