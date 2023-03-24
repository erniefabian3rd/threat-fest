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

    return <section className="band__details">
    <img className="band__detail__photo" src={alumniBand.photoURL}></img>
    <div className="band__detail__name"><h3><b>{alumniBand.bandName}</b></h3></div>
    <div className="band__detail__info">
        <div><b className="detail__header">Genre:</b> {alumniBand?.genre?.name}</div>
        <div><b className="detail__header">Hometown:</b> {alumniBand.hometown}</div><br/>
        <div><b className="detail__header">Bio:</b> {alumniBand.bio}</div><br/>
        <div><b className="detail__header">Members:</b> {alumniBand.members}</div><br/>
        {alumniBand.musicLinks ? ( 
            <a href={alumniBand.musicLinks} target="_blank" rel="noopener noreferrer">Music</a>
        ) : ""    
        }
    </div>
</section>
}