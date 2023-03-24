import { useState } from "react"
import { AlumniLineupList } from "./AlumniLineupList"
import { AlumniBandGenreFilter, AlumniBandYearFilter, CurrentLineupGenreFilter } from "./BandFilters"
import { AlumniBandSearch, CurrentBandSearch} from "./BandSearch"
import { CurrentLineupList } from "./CurrentLineupList"
import "./Bands.css"
import { BandImageHeader } from "./BandImageHeader"
import { AlumniImageHeader } from "./AlumniImageHeader"

export const AlumniBandContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredYear, setFilteredYear] = useState("")
    const [filteredGenre, setFilteredGenre] = useState("")

    return (
        <>
            <AlumniImageHeader />
            <div className="filters__container">
                <AlumniBandSearch setterFunction={setSearchTerms} />
                <div className="select__filters">
                    <AlumniBandYearFilter setterFunction={setFilteredYear} />
                    <AlumniBandGenreFilter setterFunction={setFilteredGenre} />
                </div>
            </div>
            <AlumniLineupList searchTermState={searchTerms} filteredYearState={filteredYear} filteredGenreState={filteredGenre}/>
        </>
    )
}

export const CurrentBandContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredGenre, setFilteredGenre] = useState("")

    return (
        <>
            <BandImageHeader />
            <div className="filters__container">
                <CurrentBandSearch setterFunction={setSearchTerms} />
                <CurrentLineupGenreFilter setterFunction={setFilteredGenre} />
            </div>
            <CurrentLineupList searchTermState={searchTerms} filteredGenreState={filteredGenre} />
        </>
    )
}