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
import { useNavigate } from "react-router-dom"
import { getAlumniBands } from "../ApiManager"

export const AlumniLineupList = ({ searchTermState, filteredYearState, filteredGenreState }) => {
    const [alumniBands, setAlumniBands] = useState([])
    const [filteredAlumniBands, setFilteredAlumni] = useState([])

    const localFestUser = localStorage.getItem(["fest_user"])
    const festUserObject = JSON.parse(localFestUser)

    const navigate = useNavigate()


    useEffect(() => {
        getAlumniBands()
            .then((alumniBandsArray) => {
                const bandsByName = alumniBandsArray.reduce((acc, band) => {
                    if (!acc[band.bandName]) {
                        acc[band.bandName] = {
                            ...band,
                            years: [band.yearId],
                        }
                    } else {
                        acc[band.bandName].years.push(band.yearId)
                    }
                    return acc
                }, {})
                const removedDuplicates = Object.values(bandsByName)
                let filteredAlumniBands = removedDuplicates
                if (filteredYearState) {
                    filteredAlumniBands = removedDuplicates.filter(
                        (alumniBand) => alumniBand.years.includes(parseInt(filteredYearState))
                    )
                }
                filteredAlumniBands.sort((a, b) => a.bandName.localeCompare(b.bandName))
                setAlumniBands(filteredAlumniBands)
            })
    }, [filteredYearState])

    useEffect(
        () => {
            if (festUserObject) {
                setFilteredAlumni(alumniBands)
            }
        },
        [alumniBands]
    )

    useEffect(
        () => {
            const searchedAlumni = alumniBands.filter(alumniBand => {
                return alumniBand.bandName.toLowerCase().includes(searchTermState.toLowerCase())
            })
            setFilteredAlumni(searchedAlumni)
        },
        [searchTermState]
    )

    useEffect(() => {
        let filteredYearAlumni = alumniBands
        if (filteredYearState) {
            filteredYearAlumni = alumniBands.reduce((acc, alumniBand) => {
                if (alumniBand.yearId === parseInt(filteredYearState)) {
                    acc.push(alumniBand)
                }
                return acc
            }, [])
        }
        setFilteredAlumni(filteredYearAlumni)
    }, [filteredYearState])

    useEffect(
        () => {
            const filteredGenreAlumni = alumniBands.filter((alumniBand) => alumniBand.genreId === parseInt(filteredGenreState))
            if (parseInt(filteredGenreState) > 0) {
                setFilteredAlumni(filteredGenreAlumni)
            } else {
                setFilteredAlumni(alumniBands)
            }
        },
        [filteredGenreState]
    )

    return <article>
        <section className="bands">
            {
                filteredAlumniBands.map(
                    (alumniBand) => {
                        return <section className="band" key={`alumniBand--${alumniBand.id}`}>
                            <img className="band__photo" onClick={() => navigate(`/alumni/${alumniBand.id}`)} src={alumniBand.photoURL}></img>
                            <h3 className="band__name" onClick={() => navigate(`/alumni/${alumniBand.id}`)}><b>{alumniBand.bandName}</b></h3>
                            <div className="band__genre">{alumniBand.genre.name}</div>
                        </section>
                    }
                )
            }
        </section>
    </article>
}