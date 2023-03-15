import { useState } from "react"
import { AlumniLineupList } from "./AlumniLineupList"
import { AlumniBandGenreFilter, AlumniBandYearFilter, CurrentLineupGenreFilter } from "./BandFilters"
import { AlumniBandSearch, CurrentBandSearch} from "./BandSearch"
import { CurrentLineupList } from "./CurrentLineupList"

export const AlumniBandContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredYear, setFilteredYear] = useState("")
    const [filteredGenre, setFilteredGenre] = useState("")

    return (
        <>
            <AlumniBandSearch setterFunction={setSearchTerms} />
            <AlumniBandYearFilter setterFunction={setFilteredYear} />
            <AlumniBandGenreFilter setterFunction={setFilteredGenre} />
            <AlumniLineupList searchTermState={searchTerms} filteredYearState={filteredYear} filteredGenreState={filteredGenre}/>
        </>
    )
}

export const CurrentBandContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredGenre, setFilteredGenre] = useState("")

    return (
        <>
            <CurrentBandSearch setterFunction={setSearchTerms} />
            <CurrentLineupGenreFilter setterFunction={setFilteredGenre} />
            <CurrentLineupList searchTermState={searchTerms} filteredGenreState={filteredGenre} />
        </>
    )
}