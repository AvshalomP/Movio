import { UPDATE_MOVIES, REMOVE_MOVIE } from "../actionTypes";

export default (state = [], action) => {
    switch (action.type){
        case UPDATE_MOVIES:
            return [...action.movies];
        case REMOVE_MOVIE:
            return state.filter( movie => (movie.imdbID !== action.id) );
        default:
            return state;
    }
}