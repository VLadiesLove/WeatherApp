import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import weatherPage from './weather-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    weatherPage
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;