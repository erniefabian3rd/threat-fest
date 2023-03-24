/*
GOAL:
    List all of the updates sent from the admin team for the users to see
ALGORITHM:
    -Create a function that returns each update in JSX
    -In a useEffect, fetch all of the updates from the API
*/

import { useEffect, useState } from "react"
import { getUpdatesAndUsers } from "../ApiManager"
import "./Updates.css"
import updatePhoto from "../../images/tf_gridstrip_4.png"

export const UpdateList = () => {
    const [updates, setUpdates] = useState([])

    useEffect(
        () => {
            getUpdatesAndUsers()
                .then((updatesArray) => {
                    setUpdates(updatesArray)
                })
        },
        []
    )

    const sortedUpdates = updates.length > 0
    ? [...updates].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    : [];

    return <article>
        <h2 className="updateForm__title">Updates</h2>
        <img className="updateForm__header__image" src={updatePhoto}></img>
        <section className="updates">
            {
                sortedUpdates.map(
                    (update) => {
                        return <section className="update" key={`update--${update.id}`}>
                            <div className="update__container">
                                <div className="sender__image__container">
                                    <img className="sender__image" src={update.user.photo}></img>
                                </div>
                                <div className="update__content">
                                    <header><b>{update.user.name}</b></header><br/>
                                        <div>{update.message}</div><br/>
                                        <div className="timestamp">{update.timestamp}</div>
                                </div>
                            </div>

                        </section>
                    }
                )
            }
        </section>
    </article>
}