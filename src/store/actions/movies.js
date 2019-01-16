import { apiCall } from "../../services/api";
import { UPDATE_MOVIES, REMOVE_MOVIE, EDIT_MOVIE } from "../actionTypes";

/* Action Creators */
const updateMovies = (movies) => ({
    type: UPDATE_MOVIES,
    movies
});

export const deleteMovie = (id) => ({
    type: REMOVE_MOVIE,
    id
});

export const editMovie = (updatedMovie) => ({
    type: EDIT_MOVIE,
    updatedMovie
});


/* Redux Thunk */
export const fetchMovies = () => {
    return dispatch => {
        const baseUrl = 'http://www.omdbapi.com/?apikey=thewdb&i=';
        const moviesId = ['tt0111161', 'tt0468569', 'tt0120737', 'tt0133093', 'tt0167260',
            'tt0068646', 'tt1345836', 'tt0167261', 'tt0848228', 'tt0102926']; //static array of 10 movies (10 imdb IDs)
        //API call to retrieve full description for every movie (imdb ID)
        const moviesPromiseArr = moviesId.map( movieId => apiCall('GET', baseUrl+movieId) );

        return ( Promise.all(moviesPromiseArr)
            .then( movies => {
                dispatch(updateMovies(movies))
            })
            .catch( err => console.log(err))
        )
    }
};



