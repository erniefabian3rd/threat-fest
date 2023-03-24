/*
GOAL:
    List all of the submissions from the submittedBands array and allow
        the admin to approve or deny them with buttons
ALGORITHM:
    -Create a function that returns each submittedBand in JSX
    -Declare a constant (bands) whose initial state is blank
    -In a useEffect, fetch all of the submittedBands from the API
    -Create a function that handles the approval button and checks to
        see that the submittedBand has an isApproved property set to true;
        then update it with a fetch PUT
    -Create a function that handles the denial button. Delete the entry using
        a fetch DELETE
*/

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { approveSubmissions, denySubmissions, getSubmittedBands, getSubmittedBandsAndGenres } from "../ApiManager"
import "./Submissions.css"
import submitPhoto from "../../images/tf_gridstrip_3.png"

export const SubmissionList = () => {
    const [bands, setBands] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            getSubmittedBandsAndGenres()
                .then((submittedBandsArray) => {
                    setBands(submittedBandsArray)
                })
        },
        []
    )

    const getAllSubmittedBands = () => {
        getSubmittedBandsAndGenres()
            .then((submittedBandsArray) => {
            setBands(submittedBandsArray)
    })
}

    const handleApproval = (bandId) => {
            return getSubmittedBands()
                .then((submittedBandsArray) => {
                    const band = submittedBandsArray.find((band) => band.id === bandId);
                    if (band) {
                        const updatedBand = { ...band, isApproved: true };
                        approveSubmissions(updatedBand, bandId) 
                            .then(() => {
                                return getAllSubmittedBands()
                            })
                    }
                })
        }

    const handleDeny = (bandId) => {
        denySubmissions(bandId)
            .then(() => {
                alert(`Band has been denied`)
                return getAllSubmittedBands()
            })
    }

    return <article>
       <h2 className="submissionForm__title">Submissions</h2>
        <img className="submissionForm__header__image" src={submitPhoto}></img>
        <section className="submittedBands">
            {
                bands.map(
                    (band) => {
                        return <section className="submittedBand" key={`submittedBand--${band.id}`}>
                            <div className="band__info">
                                <img className="submitted__band__photo" src={band.photoURL}></img>
                                <header className="band__name"><b>{band.bandName}</b></header>
                                <p onClick={() => navigate(`/submissions/${band.id}`)} className="details__link"><u>View Details</u></p>
                            </div>
                            <div className="button__section">
                            {band.isApproved === false ? (
                                <>
                                <button className="approval__btn" onClick={() => handleApproval(band.id)}><b>Approve</b></button>
                                <button className="deny__btn" onClick={() => handleDeny(band.id)}><b>Deny</b></button>
                                </>
                                ) : <button className="approved__btn"><b>Approved</b></button> }
                            </div>
                        </section>
                    }
                )
            }
        </section>
    </article>
}
