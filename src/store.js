import { combineReducers, createStore } from 'redux';

import posts from './reducers/posts';

import selectedid from './reducers/selectedid';

const FREQYENCY = 2000;
const LS_KEY = 'bloggy-mc-redux';

// Pass and object to combineReducers.
// this object should be "shaped" like your state.
const rootReducer = combineReducers({
    posts, 
    selectedid
});

// check localStorage for any previously saved app state
// if it's there, pass as second argument to createStore
// let initialState = {};
// const dataFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
// if (dataFromLocalStorage) {
//     initialState = dataFromLocalStorage;
// };

// the same as above, but one line:
const initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setInterval(() => {
    const state = store.getState();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}, FREQYENCY);

export default store;