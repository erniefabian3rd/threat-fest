/*
GOAL:
    Create a navbar for the users/bands that only shows links to the
        areas of the site that apply to the users/bands

ALGORITHM:
    -Return HTML for navbar with various named links that create paths
    to the assigned routes in the UserViews.js module
*/

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/threatfest_logoWhite.png"

export const UserNav = () => {
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
                    <h2 className="navbar__link" id="link__submit" onClick={() => navigate("/application")}>submission form</h2>
                </li>
                <li className="navbar__item active">
                    <h2 className="navbar__link" onClick={() => navigate("/updateform")}>updates</h2>
                </li>
                <li className="navbar__item navbar__logout">
                    <h2 className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("fest_user")
                        navigate("/", {replace: true})
                    }}>logout</h2>
                </li>
            </div>
        </ul>
    )
}