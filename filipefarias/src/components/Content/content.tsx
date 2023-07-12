import React, { PropsWithChildren } from "react";
import Header from "../Header/header";
import './Content.css'

interface Props {
    title: string
}

function Content(props: PropsWithChildren<Props>): JSX.Element {
    return <>
        <Header title={props.title}/>
        <section className="site-content">
        {props.children}
        </section>
    </>
}

export default Content