/* ROOT REDUCER */

import { combineReducers } from 'redux';
//reducers
import movies from './movies';


const rootReducer = combineReducers({
   movies
});


export default rootReducer;