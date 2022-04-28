import thunkMiddleware from "redux-thunk";
import postsReducer from "./posts/postsReducer";

const { createStore, combineReducers, applyMiddleware, compose} = require('redux');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
    posts: postsReducer
});

let store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
