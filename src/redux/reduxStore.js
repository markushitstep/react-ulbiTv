import thunkMiddleware from "redux-thunk";
import postsReducer from "./posts/postsReducer";
const { createStore, combineReducers, applyMiddleware} = require('redux');

let reducers = combineReducers({
    posts: postsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
