export const getSubmittedBands = () => {
    return fetch(`http://localhost:8088/submittedBands?_expand=genre`)
        .then(response => response.json()) 
}

export const getAlumniBands = () => {
    return fetch(`http://localhost:8088/alumniBands?_expand=genre`)
        .then(response => response.json()) 
}