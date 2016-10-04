import initialState from './initialState';

export default function videoListReducer(state = initialState.videoList, action) {
  switch (action.type) {
    case 'UPDATE_VIDEO_LIST':
      return action.videoList;

    default:
      return state;
  }
}
