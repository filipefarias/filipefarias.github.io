import React from "react";
import './NavItem.css'

interface Props {
    name: string,
    linkAddress: string
}

function NavItem(props : Props): JSX.Element {
    return <a href={props.linkAddress}><li className="navigation-item">{props.name}</li></a>
}

export default NavItem