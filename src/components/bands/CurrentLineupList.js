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
import { useNavigate } from "react-router-dom"
import { getSubmittedBandsAndGenres } from "../ApiManager"

export const CurrentLineupList = ( {searchTermState, filteredGenreState} ) => {
    const [bands, setBands] = useState([])
    const [filteredCurrentBands, setFilteredCurrentBands] = useState([])

    const localFestUser = localStorage.getItem(["fest_user"])
    const festUserObject = JSON.parse(localFestUser)

    const navigate = useNavigate()

    useEffect(
        () => {
            getSubmittedBandsAndGenres()
            .then((submittedBandsArray) => {
                const sortedSubmittedBands = submittedBandsArray.sort((a, b) => a.bandName.localeCompare(b.bandName))
                setBands(sortedSubmittedBands)
            })
        },
        []
    )

    useEffect(
        () => {
            if (festUserObject) {
                setFilteredCurrentBands(bands)
            }
        },
        [bands]
    )

    useEffect(
        () => {
            const searchedCurrentBand = bands.filter(band => {
                return band.bandName.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredCurrentBands(searchedCurrentBand)
        },
        [searchTermState]
    )

    useEffect(
        () => {
            const filteredBands = bands.filter((band) => band.genreId === parseInt(filteredGenreState))
            if (parseInt(filteredGenreState) > 0) {
            setFilteredCurrentBands(filteredBands)
            } else {
                setFilteredCurrentBands(bands)
            }
        },
        [filteredGenreState]
    )

    return <article>
        <section className="bands">
            {
                filteredCurrentBands.map(
                    (band) => {
                        if (band.isApproved) {
                        return <section className="band" key={`band--${band.id}`}>
                                    <img onClick={() => navigate(`/lineup/${band.id}`)} className="band__photo" src={band.photoURL}></img>
                                    <h3 onClick={() => navigate(`/lineup/${band.id}`)} className="band__name"><b>{band.bandName}</b></h3>
                                    <div className="band__genre">{band.genre.name}</div>
                                </section>
                        }
                    }
                )
            }
        </section>
    </article>
}

