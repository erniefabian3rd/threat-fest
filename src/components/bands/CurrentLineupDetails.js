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

    return <section className="band">
    <img className="band__photo" src={band.photoURL}></img>
    <div><h3><b>{band.bandName}</b></h3></div>
    <div><b>Genre:</b> {band?.genre?.name}</div>
    <div><b>Hometown:</b> {band.hometown}</div><br/>
    <div><b>Bio:</b> {band.bio}</div><br/>
    <div><b>Members:</b> {band.members}</div><br/>
    {band.musicLinks ? ( 
        <a href={band.musicLinks} target="_blank" rel="noopener noreferrer">Music</a>
    ) : ""    
    }
</section>
}