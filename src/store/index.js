import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


export function configureStore() {
    let getComposeEnhancers = () => {
        if (window.navigator.userAgent.includes('Chrome')) {
            return compose(
                applyMiddleware(thunk),
                window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
            )
        }
        return compose(applyMiddleware(thunk));
    };

    const store = createStore(rootReducer, getComposeEnhancers() );
    return store;
}