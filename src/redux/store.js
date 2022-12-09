import React from 'react';
import { legacy_createStore as createStore } from 'redux';
// import { createStore } from 'redux';
// import CakeReducer from './cake/CakeReducer';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;