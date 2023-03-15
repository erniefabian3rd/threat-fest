import { useEffect, useState } from "react"
import { getGenres, getYears } from "../ApiManager"

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
        <div>
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
        <div>
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
        <div>
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