import './Navigation.css'
import NavItem from "./NavItem/navItem";

function Menu(): JSX.Element {
    return <nav className="menu">
        <ul>
            <NavItem name="About Me" linkAddress="/" />
            <hr></hr>
            <NavItem name="Experiences" linkAddress="/experiences" />
            <hr></hr>
            <NavItem name="Education" linkAddress="/education" />
            <hr></hr>
            <NavItem name="Projects" linkAddress="/projects" />
        </ul>
    </nav>
}

export default Menu