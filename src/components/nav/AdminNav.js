/*
GOAL:
    Create a navbar for the admin team that only shows links to the
        areas of the site that apply to the admin team

ALGORITHM:
    -Return HTML for navbar with various named links that create paths
    to the assigned routes in the AdminViews.js module
*/

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/threatfest_logoWhite.png"

export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
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
                    <h2 className="navbar__link" id="link__update" onClick={() => navigate("/updateform")}>send updates</h2>
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