import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import getPopularMovies from "../api/getPopularMovies";
import MovieList from "../components/MovieList";
import MovieDetails from "../components/MovieDetails";
import "./PopularMovie.css"
import MovieHeader from "../components/MovieHeader";

const PopularMovies = props => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
    const [selectedMovieId, setSelectedMovieId] = useState(null)

    useEffect(() => {
        getPopularMovies({page}).then(response => {
            console.log('response', response)
            setMovies(previousMovies => [...previousMovies, ...response.results])
        })
    }, [page])

    const handleSelectMovie = (movieId) => {
        setSelectedMovieId(movieId)
    }

    return (
        <>
            <MovieHeader/>
            <div className={'popular-movies-container'}>
                <MovieList movies={movies} setPage={setPage} onSelectMovie={handleSelectMovie} selectedMovieId={selectedMovieId}/>
                <MovieDetails selectedMovieId={selectedMovieId}/>
            </div>
        </>

    );
};

PopularMovies.propTypes = {

};

export default PopularMovies;
