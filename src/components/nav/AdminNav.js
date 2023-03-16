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

export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/lineup">Lineup</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/alumni">Alumni</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/submissions">Submissions</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/updateform">Send Updates</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("fest_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}