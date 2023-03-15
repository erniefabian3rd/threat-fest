// CurrentLineupList.js and SubmissionList.js
export const getSubmittedBandsAndGenres = () => {
    return fetch(`http://localhost:8088/submittedBands?_expand=genre`)
        .then(response => response.json()) 
}

// SubmissionList.js
export const getSubmittedBands = () => {
    return fetch(`http://localhost:8088/submittedBands`)
        .then(response => response.json()) 
}

// AlumniLineupList.js
export const getAlumniBands = () => {
    return fetch(`http://localhost:8088/alumniBands?_expand=genre&_expand=year`)
        .then(response => response.json()) 
}

// SubmissionForm.js
export const getGenres = () => {
    return fetch(`http://localhost:8088/genres`)
        .then(response => response.json()) 
}

// SubmissionForm.js
export const submitBands = (bandsToSendToAPI) => {
    return fetch(`http://localhost:8088/submittedBands`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bandsToSendToAPI)
    })
        .then(response => response.json()) 
}

// SubmissionForm.js
export const approveSubmissions = (updatedBand, bandId) => {
    return fetch(`http://localhost:8088/submittedBands/${bandId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBand)
    })
    .then(response => response.json())
}

// SubmissionForm.js
export const denySubmissions = (bandId) => {
    return fetch(`http://localhost:8088/submittedBands/${bandId}`, {
        method: "DELETE"
    })
}

// UpdateForm.js
export const sendUpdates = (updatesToSendToAPI) => {
    return fetch(`http://localhost:8088/updates`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatesToSendToAPI)
    })
        .then(response => response.json()) 
}

// UpdateList.js
export const getUpdatesAndUsers = () => {
    return fetch(`http://localhost:8088/updates?_expand=user`)
        .then(response => response.json()) 
}

// BandFilter.js
export const getYears = () => {
    return fetch(`http://localhost:8088/years?_embed=alumniBands`)
        .then(response => response.json()) 
}