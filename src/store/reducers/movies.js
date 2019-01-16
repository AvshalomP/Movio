import { UPDATE_MOVIES, REMOVE_MOVIE, EDIT_MOVIE } from "../actionTypes";

export default (state = [], action) => {
    switch (action.type){
        case UPDATE_MOVIES:
            return [...action.movies];
        case REMOVE_MOVIE:
            return state.filter( movie => (movie.imdbID !== action.id) );
        case EDIT_MOVIE:
            return state.map( movie => (movie.imdbID === action.updatedMovie.imdbID) ? action.updatedMovie : movie );
        default:
            return state;
    }
}