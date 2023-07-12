// import React from "react";
import './Header.css'

interface Props {
    title: string
}

function Header(props: Props): JSX.Element {
    return <header className="site-header">
        <h1>{props.title}</h1>
    </header>
}

export default Header