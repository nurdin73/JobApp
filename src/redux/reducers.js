const {combineReducers} = require('redux');

import TestReducer from './test/reducer';

const reducers = combineReducers({
  // reducers
  TestReducer,
});

export default reducers;
