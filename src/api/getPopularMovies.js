const api_key = process.env.REACT_APP_MOVIE_API_KEY
const baseApiUrl = process.env.REACT_APP_BASE_API

const getPopularMovies = ({page = 0}) => {
    const url = `${baseApiUrl}/movie/popular?api_key=${api_key}&page=${page}`

    return fetch(url).then(response => response.json())
}

export default getPopularMovies
