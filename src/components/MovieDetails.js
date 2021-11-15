import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import getMovie from "../api/getMovie";
const imageBaseUrl = process.env.REACT_APP_BASE_IMAGE_URL

const MovieDetails = ({selectedMovieId}) => {
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        if(selectedMovieId) {
            getMovie(selectedMovieId).then(response => {
                console.log('response', response)
                setMovieDetails(response)
            })
        }

    }, [selectedMovieId])

    if(!selectedMovieId) {
        return null
    }
    return (
        <div className={'movie-details-container'}>
            <h1>{movieDetails?.title}</h1>
            <div className={'movie-details'}>
                {movieDetails.poster_path && <img width={200} height={200} src={imageBaseUrl + movieDetails.poster_path}/>}
                <span className={'movie-details-overview'}>{movieDetails?.overview}</span>
            </div>

        </div>
    );
};

MovieDetails.propTypes = {

};

export default MovieDetails;
