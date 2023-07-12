import React from "react"
import { Link } from 'react-router-dom'
import './NavItem.css'

interface Props {
    name: string,
    linkAddress: string
}

function NavItem(props : Props): JSX.Element {
    return <Link to={props.linkAddress} className="navigation-item"><li className="navigation-item">{props.name}</li></Link>
}

export default NavItem