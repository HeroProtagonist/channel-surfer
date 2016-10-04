import { combineReducers } from 'redux';
import videoList from './videoListReducer';

const rootReducer = combineReducers({
  videoList,
});

export default rootReducer;
