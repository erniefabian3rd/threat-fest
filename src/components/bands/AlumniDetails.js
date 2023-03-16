import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAlumniDetails} from "../ApiManager"
import "./Bands.css"

export const AlumniDetails = () => {
    const { alumniBandId } = useParams()
    const [alumniBand, updateAlumniBand] = useState([])

    useEffect(
        () => {
            getAlumniDetails(alumniBandId)
                .then((data) => {
                    const individualAlumni = data[0]
                    updateAlumniBand(individualAlumni)
                })
        },
        [alumniBandId]
    )

    return <section className="band">
    <img className="band__photo" src={alumniBand.photoURL}></img>
    <div><h3><b>{alumniBand.bandName}</b></h3></div>
    <div><b>Genre:</b> {alumniBand?.genre?.name}</div>
    <div><b>Hometown:</b> {alumniBand.hometown}</div><br/>
    <div><b>Bio:</b> {alumniBand.bio}</div><br/>
    <div><b>Members:</b> {alumniBand.members}</div><br/>
    {alumniBand.musicLinks ? ( 
        <a href={alumniBand.musicLinks} target="_blank" rel="noopener noreferrer">Music</a>
    ) : ""    
    }
</section>
}