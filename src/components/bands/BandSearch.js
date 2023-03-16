/*
GOAL:
    Two search bars that filter the bands according to the search terms
ALGORITHM:
    -Create functions that take a setterFunction as a parameter 
        return JSX with the search bar, setting the searched values
*/

export const AlumniBandSearch = ( {setterFunction }) => {
    return (
        <div>
            <input className="search__bar"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Search Alumni" />
        </div> 
    )
}

export const CurrentBandSearch = ( {setterFunction }) => {
    return (
        <div>
            <input className="search__bar"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Search Bands" />
        </div> 
    )
}