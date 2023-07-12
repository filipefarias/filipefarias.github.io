// import React from "react"
import { Routes, Route } from "react-router-dom";
import Main from "./components/Pages/Main";
import Experiences from "./components/Pages/Experiences";
import Education from "./components/Pages/Education";
import Projects from "./components/Pages/Projects";
import ErrorPage from "./components/Pages/ErrorPage"

function AppRouter() {
    return (
        <Routes>
            <Route path="/" Component={Main} />
            <Route path="experiences" Component={Experiences} />
            <Route path="education" Component={Education} />
            <Route path="projects" Component={Projects} />
            <Route path="*" Component={ErrorPage} />
        </Routes>
    )
}

export default AppRouter