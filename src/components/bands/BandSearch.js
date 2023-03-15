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