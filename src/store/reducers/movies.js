import { UPDATE_MOVIES } from "../actionTypes";

export default (state = [], action) => {
    switch (action.type){
        case UPDATE_MOVIES:
            return [...action.movies];
        default:
            return state;
    }
}