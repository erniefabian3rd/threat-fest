/*
GOAL:
    Two select dropdowns that filter the bands by 1) year and 2) genre
ALGORITHM:
    -Create useEffects to fetch information from the bridge tables in the API
    -In each function, return the JSX that includes the dropdown options
*/

import { useEffect, useState } from "react"
import { getGenres, getYears } from "../ApiManager"
import "./Bands.css"

export const AlumniBandYearFilter = ( {setterFunction}) => {
    const [years, setYears] = useState([])

    useEffect(
        () => {
            getYears()
                .then((yearsArray) => {
                    setYears(yearsArray)
                })
        },
        []
    )


    return (
        <div className="year__filter">
            <select
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                >
                <option value="">Select a year</option>
                {years.map((year) => (
                    <option key={year.id} value={year.id}>
                        {year.year}
                    </option>
                ))}
            </select>
        </div>
    )
}

export const AlumniBandGenreFilter = ( {setterFunction} ) => {
    const [genres, setGenres] = useState([])

    useEffect(
        () => {
            getGenres()
                .then((genresArray) => {
                    setGenres(genresArray)
                })
        },
        []
    )

    return (
        <div className="filter">
            <select 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                >
                <option value="">Select a genre</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export const CurrentLineupGenreFilter = ( {setterFunction} ) => {
    const [genres, setGenres] = useState([])

    useEffect(
        () => {
            getGenres()
                .then((genresArray) => {
                    setGenres(genresArray)
                })
        },
        []
    )

    return (
        <div class="filter">
            <select
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                >
                <option value="">Select a genre</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    )
}