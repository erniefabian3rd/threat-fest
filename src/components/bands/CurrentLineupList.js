/*
GOAL:
    Display a list of all current bands (in alphabetical order) along with
    their genre in a grid layout
ALGORITHM:
    -Create a function that returns each band's HTML
    -Declare a variable set to a blank initial state
    -Declare a setter function set to blank initial state
    -In ApiManager, create a function that fetches the submittedBands
        from the API
    -In a useEffect, declare the fetch function and sort the bands
        by alphabetical order, setting the new state to the sorted bands
    -Loop through the bands to get their photo, name, and genre
*/

import { useEffect, useState } from "react"
import { getSubmittedBands } from "../ApiManager"
import "./Bands.css"

export const CurrentLineupList = () => {
    const [bands, setBands] = useState([])

    useEffect(
        () => {
            getSubmittedBands()
            .then((submittedBandsArray) => {
                const sortedSubmittedBands = submittedBandsArray.sort((a, b) => a.bandName.localeCompare(b.bandName))
                setBands(sortedSubmittedBands)
            })
        },
        []
    )

    return <article>
    <h2 className="lineup__header">Threat Fest 2023</h2>
        <section className="bands">
            {
                bands.map(
                    (band) => {
                        if (band.isApproved) {
                        return <section className="band" key={`band--${band.id}`}>
                                    <img className="band__photo" src={band.photoURL}></img>
                                    <h3><b>{band.bandName}</b></h3>
                                    <div>{band.genre.name}</div>
                                </section>
                        }
                    }
                )
            }
        </section>
    </article>
}
