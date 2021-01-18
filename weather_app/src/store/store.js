import React from 'react';
import {createStore, combineReducers} from 'redux';
import weatherReducer from './weather-reducer'

let reducers = combineReducers({
    weatherReducer
})

let store = createStore(reducers);

export default store;

window.store = store;