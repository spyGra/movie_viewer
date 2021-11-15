const api_key = process.env.REACT_APP_MOVIE_API_KEY
const baseApiUrl = process.env.REACT_APP_BASE_API

const getMovie = (movieId) => {
    const url = `${baseApiUrl}/movie/${movieId}?api_key=${api_key}`

    return fetch(url).then(response => response.json())
}

export default getMovie
