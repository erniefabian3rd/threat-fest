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

export const UserNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/lineup">Lineup</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="alumni">Alumni</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="application">Submission Form</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="updates">Updates</Link>
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