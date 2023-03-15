/*
GOAL:
    Create a message form that the admin team can use to send updates
        to users/non-admins
ALGORITHM:
    -Create a function that returns a message form in JSX
    -Declare a variable (update) and set it's initial state to the
        message property with an empty string
    -Upon clicking the send button, send the update input to the updates
        API using a fetch POST. Include userId/senderId, message, and timestamp
*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendUpdates } from "../ApiManager"

export const UpdateForm = () => {
    const navigate = useNavigate()
    const [update, messageUpdate] = useState({
        message: ""
    })
    const localFestUser = localStorage.getItem("fest_user")
    const festUserObject = JSON.parse(localFestUser)

    const sendMessageButton = (event) => {
        event.preventDefault()

        const updatesToSendToAPI = {
            userId: festUserObject.id,
            message: update.message,
            timestamp: new Date
        }

        return sendUpdates(updatesToSendToAPI)
            .then(() => {
                alert("Update has been sent!")
                navigate("/")
            })
    }

    return (
        <form className="updateForm">
            <h2 className="updateForm__title">Update Form:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="updates">Message:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type Message Here..."
                        value={update.message}
                        onChange={
                            (evt) => {
                                const copy = { ...update }
                                copy.message = evt.target.value
                                messageUpdate(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => sendMessageButton(clickEvent)}
                className="btn btn-primary">
                Send
            </button>
        </form>
    )
}