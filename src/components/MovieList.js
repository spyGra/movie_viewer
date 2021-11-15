import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {debounce} from "../utils/utils";

const MovieList = ({movies, setPage, selectedMovieId, onSelectMovie}) => {
    const movieContainerRef = useRef(null)

    useEffect(() => {
        const movieContainerElement = movieContainerRef.current
        if(movieContainerElement && !(movieContainerElement.scrollHeight > movieContainerElement.height)) {
            setPage(previousPage => previousPage + 1)
        }
    }, [])

    const handleOnScroll = debounce(({target}) => {
        console.log('targe', target)
       const scrollPercentage = 100 * target.scrollTop / (target.scrollHeight-target.clientHeight)
        if(scrollPercentage > 90) {
            setPage(previousPage => previousPage + 1)
        }

    }, 100)
    // selected
    return (
        <div ref={movieContainerRef} onScroll={handleOnScroll} className={'movie-list-container'}>
            {movies.map((movie) => {
                const isSelected = movie.id === selectedMovieId
                return <div key={movie.id} onClick={() => onSelectMovie(movie.id)} className={`movie-item ${ isSelected ? 'selected' : ''}`}>{movie.title}</div>
            })}
        </div>
    );
};

MovieList.propTypes = {

};

export default MovieList;
