import { combineReducers } from 'redux';
import click from './clickReducer';

const rootReducer = combineReducers({
  click,
});

export default rootReducer;
