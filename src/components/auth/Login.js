/*
GOAL: 
    Be able to log in as either an admin or regular user

ALGORITHM:
    -Adjust boilerplate code from Honey Rae information to fit correct
        variables associated with Threat Fest API database
*/

import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import logo from "../../images/threatfest_logoBlack.png"

export const Login = () => {
    const [email, setEmail] = useState("ernie@threatfest.com")
    const [password, setPassword] = useState("ethreat1")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}&password=${password}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("fest_user", JSON.stringify({
                        id: user.id,
                        admin: user.isAdmin
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <body className="login_page">
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <img className="logo" src={logo}></img>
                    <h2>Please sign in:</h2>
                    <fieldset>
                        <label className="login__label" htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label className="login__label" htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="sign__in__btn" type="submit"><b>
                            Sign in
                        </b></button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
        </body>
    )
}

