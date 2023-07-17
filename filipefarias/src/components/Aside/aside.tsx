import './Aside.css'
import ProfilePanel from "./profilePanel/profilePanel"
import Menu from "./Navigation/navigation"
import SocialPanel from "./Social/SocialPanel/SocialPanel"

function Aside(): JSX.Element {
    return <aside className="site-aside">
        <div className="top-aside">
            <ProfilePanel />
            <Menu />
        </div>
        <SocialPanel />
    </aside>
}

export default Aside