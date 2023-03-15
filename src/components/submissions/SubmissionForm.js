/*
GOAL:
    Create a form that users can fill out for their band to apply
        to play this year's festival
ALGORITHM:
    -Create a function that returns a form in JSX
    -Declare a constant (band) whose initial state is the
        properties of the submittedBands array from the API set to
        empty strings
    -Declare a constant (genre) whose initial state is blank
    -In a useEffect, fetch all of the genres from the API
    -As the user inputs in the fields, update the state for bands
    -Upon clicking the submit button, send the user's inputs to a new object
        in the submittedBands array in the API. Do so with a fetch POST.
*/

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getGenres, submitBands } from "../ApiManager"

export const SubmissionForm = () => {
    const navigate = useNavigate()
    const [genres, setGenres] = useState([])
    const [band, update] = useState({
        bandName: "",
        genreId: "",
        bio: "",
        hometown: "",
        members: "",
        photoURL: "",
        musicLinks: ""
    })
    const localFestUser = localStorage.getItem("fest_user")
    const festUserObject = JSON.parse(localFestUser)

    useEffect(
        () => {
            getGenres()
                .then((genresArray) => {
                    setGenres(genresArray)
                })
        },
        []
    )

    const submissionButton = (event) => {
        event.preventDefault()

        const bandsToSendToAPI = {
            userId: festUserObject.id,
            bandName: band.bandName,
            genreId: parseInt(band.genreId),
            bio: band.bio,
            hometown: band.hometown,
            members: band.members,
            photoURL: band.photoURL,
            musicLinks: band.musicLinks,
            isApproved: false
        }

        return submitBands(bandsToSendToAPI)
            .then(() => {
                alert("Thank you for your submission!")
                navigate("/")
            })
    }

    return (
    <form className="submissionForm">
    <h2 className="submissionForm__title">Submission Form:</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="bandName">Band Name:</label>
            <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Band Name"
                value={band.bandName}
                onChange={
                    (evt) => {
                        const copy = { ...band }
                        copy.bandName = evt.target.value
                        update(copy)
                    }
                } />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="genre">Genre:</label>
            <select
                value={band.genreId}
                onChange={
                    (evt) => {
                        const copy = { ...band }
                        copy.genreId = evt.target.value
                        update(copy)
                    }
                } > <option value="">Choose Genre</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="bio">Band Bio:</label>
            <textarea
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Tell us about your band"
                value={band.bio}
                onChange={
                    (evt) => {
                        const copy = { ...band }
                        copy.bio = evt.target.value
                        update(copy)
                    }
                } />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="hometown">Hometown:</label>
            <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Hometown"
                value={band.hometown}
                onChange={
                    (evt) => {
                        const copy = { ...band }
                        copy.hometown = evt.target.value
                        update(copy)
                    }
                } />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="members">Members:</label>
            <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Members' Names (and instruments)"
                value={band.members}
                onChange={
                    (evt) => {
                        const copy = { ...band }
                        copy.members = evt.target.value
                        update(copy)
                    }
                } />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="photo">Promo Photo:</label>
            <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Photo URL"
                value={band.photoURL}
                onChange={
                    (evt) => {
                        const copy = { ...band }
                        copy.photoURL = evt.target.value
                        update(copy)
                    }
                } />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="musicLinks">Link to Music:</label>
            <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Music Link URL"
                value={band.musicLinks}
                onChange={
                    (evt) => {
                        const copy = { ...band }
                        copy.musicLinks = evt.target.value
                        update(copy)
                    }
                } />
        </div>
    </fieldset>

    <button
        onClick={(clickEvent) => submissionButton(clickEvent)}
        className="btn btn-primary">
        Submit
    </button>
</form>
    )
}