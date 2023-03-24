/*
GOAL:
    Create a navbar for the admin team that only shows links to the
        areas of the site that apply to the admin team

ALGORITHM:
    -Return HTML for navbar with various named links that create paths
    to the assigned routes in the AdminViews.js module
*/

import { useLocation, useNavigate } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/threatfest_logoWhite.png"
import { useState } from "react"

export const AdminNav = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [navBackground, setNavBackground] = useState(false)

    const changeNavBackground = () => {
        if (window.scrollY >= 725) {
            setNavBackground(true)
        } else {
            setNavBackground(false)
        }
    }

    window.addEventListener('scroll', changeNavBackground)

    if (location.pathname === "/") {
    return (
        <ul className={navBackground ? 'home__navbar-bg' : 'home__navbar'}>
            <li className="navbar__item active">
                <img className="navbar__logo" src={logo} onClick={() => navigate("/")}></img>
            </li>
            <div className="navLink__container">
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/lineup")}>lineup</h2>
                </li>
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/alumni")}>alumni</h2>
                </li>
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/submissions")}>submissions</h2>
                </li>
                <li className="navbar__item active">
                    <h2 className="navbar__link" id="link__update" onClick={() => navigate("/updateform")}>updates</h2>
                </li>
                <li className="navbar__item navbar__logout">
                    <h2 className="navbar__link" onClick={() => {
                        localStorage.removeItem("fest_user")
                        navigate("/", {replace: true})
                    }}>logout</h2>
                </li>
            </div>
        </ul>
    )
} else {
    return (
        <ul className="else__navbar">
            <li className="navbar__item active">
                <img className="navbar__logo" src={logo} onClick={() => navigate("/")}></img>
            </li>
            <div className="navLink__container">
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/lineup")}>lineup</h2>
                </li>
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/alumni")}>alumni</h2>
                </li>
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/submissions")}>submissions</h2>
                </li>
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/updateform")}>updates</h2>
                </li>
                <li className="navbar__item navbar__logout">
                    <h2 className="navbar__link" onClick={() => {
                        localStorage.removeItem("fest_user")
                        navigate("/", {replace: true})
                    }}>logout</h2>
                </li>
            </div>
        </ul>
    )
}
}