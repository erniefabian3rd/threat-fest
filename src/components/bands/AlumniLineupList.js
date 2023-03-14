/*
GOAL:
    Display a list of all alumni bands (in alphabetical order) along with
    their genre in a grid layout
ALGORITHM:
    -Create a function that returns each band'd HTML
    -Declare a variable set to a blank initial state
    -Declare a setter function set to blank initial state
    -In ApiManager, create a function that fetches the alumniBands
        from the API
    -In a useEffect, declare the fetch function and check
        to see if any bands are duplicates over multiple years -> add them once
    -Sort the bands by alphabetical order and set the new state to the sorted bands
    -Loop through the bands to get their photo, name, and genre
*/

import { useEffect, useState } from "react"
import { getAlumniBands } from "../ApiManager"
import "./Bands.css"

export const AlumniLineupList = () => {
    const [alumniBands, setAlumniBands] = useState([])

    useEffect(
        () => {
            getAlumniBands()
            .then((alumniBandsArray) => {
                const bandsByName = alumniBandsArray.reduce((acc, band) => {
                    if (!acc[band.bandName]) {
                        acc[band.bandName] = band
                    }
                    return acc
                }, {})
                const removedDuplicates = Object.values(bandsByName) 
                removedDuplicates.sort((a, b) => a.bandName.localeCompare(b.bandName))
                setAlumniBands(removedDuplicates)
            })
        },
        []
    )

    return <article>
    <h2 className="lineup__header">Alumni Bands</h2>
        <section className="bands">
            {
                alumniBands.map(
                    (band) => {
                        return <section className="band" key={`band--${band.id}`}>
                                    <img className="band__photo" src={band.photoURL}></img>
                                    <h3><b>{band.bandName}</b></h3>
                                    <div>{band.genre.name}</div>
                                </section>
                    }
                )
            }
        </section>
    </article>
}