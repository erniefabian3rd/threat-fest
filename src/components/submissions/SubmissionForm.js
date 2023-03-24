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
import "./Submissions.css"
import submitPhoto from "../../images/tf_gridstrip_3.png"

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


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
        <>
            <h2 className="submissionForm__title">Submission Form</h2>
            <img className="submissionForm__header__image" src={submitPhoto}></img>
            <form className="submissionForm">
                <h2>Please fill out our application below:</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="bandName">Band Name:</label>
                        <div className="input__field">
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
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="genre">Genre:</label>
                        <div className="input__field">
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
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="bio">Band Bio:</label>
                        <div className="input__field">
                            <textarea
                                required autoFocus
                                type="text"
                                className="form-control-band__bio"
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
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="hometown">Hometown:</label>
                        <div className="input__field">
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
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="members">Members:</label>
                        <div className="input__field">
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
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="photo">Promo Photo:</label>
                        <div className="input__field">
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
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="musicLinks">Link to Music:</label>
                        <div className="input__field">
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
                    </div>
                </fieldset>

                <button
                    onClick={(clickEvent) => {
                         submissionButton(clickEvent)}}
                    className="btn-submit"><b>
                        Submit
                    </b></button>
            </form>
        </>
    )
}