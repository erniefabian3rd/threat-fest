import "./Bands.css"
import lineupPhoto from "../../images/tf_gridstrip_2.png"

export const BandImageHeader = () => {
    return (
    <>
    <h2 className="lineup__header">Threat Fest 2023</h2>
    <img className="lineup__header__image" src={lineupPhoto}></img>
    </>
    )
}