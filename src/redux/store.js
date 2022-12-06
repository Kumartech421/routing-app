import React from 'react';
import { legacy_createStore as createStore } from 'redux';
// import { createStore } from 'redux';
import CakeReducer from './cake/CakeReducer';

const store = createStore(CakeReducer);

export default store;