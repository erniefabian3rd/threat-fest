import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { approveSubmissions, denySubmissions, getCurrentLineupDetails, getSubmittedBands } from "../ApiManager"
import "./Submissions.css"

export const SubmissionDetails = () => {
    const { submittedBandId } = useParams()
    const [band, updateBand] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            getCurrentLineupDetails(submittedBandId)
                .then((data) => {
                    const individualBand = data[0]
                    updateBand(individualBand)
                })
        },
        [submittedBandId]
    )

    const handleApproval = (submittedBandId) => {
        return getSubmittedBands()
            .then((submittedBandsArray) => {
                const band = submittedBandsArray.find((band) => band.id === submittedBandId);
                if (band) {
                    const updatedBand = { ...band, isApproved: true };
                    approveSubmissions(updatedBand, submittedBandId)
                        .then(() => {
                            navigate("/submissions")
                        })
                }
            })
    }

    const handleDeny = (submittedBandId) => {
        denySubmissions(submittedBandId)
            .then(() => {
                alert(`Band has been denied`)
                navigate("/submissions")
            })
    }


    return <section className="band__details">
        <img className="band__detail__photo" src={band.photoURL}></img>
        <div className="band__detail__name"><h3><b>{band.bandName}</b></h3></div>
        <div className="band__detail__info">
            <div><b className="detail__header">Genre:</b> {band?.genre?.name}</div>
            <div><b className="detail__header">Hometown:</b> {band.hometown}</div><br />
            <div><b className="detail__header">Bio:</b> {band.bio}</div><br />
            <div><b className="detail__header">Members:</b> {band.members}</div><br />
            {band.musicLinks ? (
                <a href={band.musicLinks} target="_blank" rel="noopener noreferrer">Music</a>
            ) : ""
            }
        </div>
        <div className="button__section">
            {band.isApproved === false ? (
                <>
                    <button className="approval__details__btn" onClick={() => handleApproval(band.id)}><b>Approve</b></button>
                    <button className="deny__details__btn" onClick={() => handleDeny(band.id)}><b>Deny</b></button>
                </>
            ) : <button className="approved__details__btn"><b>Approved</b></button>}
        </div>
    </section>
}