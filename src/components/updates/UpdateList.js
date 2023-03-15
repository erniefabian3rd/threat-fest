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

    return <article>
        <h2 className="updateList__header">Updates:</h2>
        <section className="updates">
            {
                updates.map(
                    (update) => {
                        return <section className="update" key={`update--${update.id}`}>
                            <header className="message">{update.message}</header>
                            <div className="author__date">
                                <div>Sent by: {update.user.name}</div>
                                <div>{update.timestamp}</div>
                            </div>

                        </section>
                    }
                )
            }
        </section>
    </article>
}