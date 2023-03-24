/*
GOAL: 
    Be able to register as a new user

ALGORITHM:
    -Adjust boilerplate code from Honey Rae information to fit correct
        variables associated with Threat Fest API database
    -Make sure fetch POST sends to users API
*/

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import logo from "../../images/threatfest_logoBlack.png"


export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        isAdmin: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("fest_user", JSON.stringify({
                        id: createdUser.id,
                        admin: createdUser.isAdmin
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${user.email}&password=${user.password}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    window.alert("Account with that email address already exists")
                }
                else {
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }
// Form 
    return (
        <body className="register_page">
        <main className="container--login" style={{ textAlign: "center" }}>
            <form className="form--register" onSubmit={handleRegister}>
            <img className="logo" src={logo}></img>
            <h2 className="register__header">Register:</h2>
                <fieldset>
                    
                    <input onChange={updateUser}
                           type="name" id="name" className="form-control"
                           placeholder="Enter your full name" required autoFocus />
                </fieldset>
                <fieldset>
                    
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <button className="register__btn" type="submit"><b>Register</b></button>
                </fieldset>
                <section className="link--login">
                    <Link to="/login">Already a member?</Link>
            </section>
            </form>
        </main>
        </body>
    )
}

