import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCurrentLineupDetails } from "../ApiManager"
import "./Bands.css"

export const CurrentLineupDetails = () => {
    const { bandId } = useParams()
    const [band, updateBand] = useState([])

    useEffect(
        () => {
            getCurrentLineupDetails(bandId)
                .then((data) => {
                    const individualBand = data[0]
                    updateBand(individualBand)
                })
        },
        [bandId]
    )

    return <section className="band__details">
    <img className="band__detail__photo" src={band.photoURL}></img>
    <div className="band__detail__name"><h3><b>{band.bandName}</b></h3></div>
    <div className="band__detail__info">
        <div><b className="detail__header">Genre:</b> {band?.genre?.name}</div>
        <div><b className="detail__header">Hometown:</b> {band.hometown}</div><br/>
        <div><b className="detail__header">Bio:</b> {band.bio}</div><br/>
        <div><b className="detail__header">Members:</b> {band.members}</div><br/>
        {band.musicLinks ? ( 
            <a href={band.musicLinks} target="_blank" rel="noopener noreferrer">Music</a>
        ) : ""    
        }
    </div>
</section>
}