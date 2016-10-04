import { combineReducers } from 'redux';
import videoList from './videoListReducer';
import mainVideo from './videoReducer';

const rootReducer = combineReducers({
  videoList,
  mainVideo,
});

export default rootReducer;
