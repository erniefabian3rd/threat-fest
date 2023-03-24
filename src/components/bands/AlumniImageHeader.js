import alumniPhoto from "../../images/tf_gridstrip_1.png"
import "./Bands.css"

export const AlumniImageHeader = () => {
    return (
        <>
        <h2 className="lineup__header">Alumni Bands</h2>
        <img className="lineup__header__alumni__image" src={alumniPhoto}></img>
        </>
    )
}