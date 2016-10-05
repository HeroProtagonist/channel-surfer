import initialState from './initialState';

export default function videoListReducer(state = initialState.videoList, action) {
  switch (action.type) {
    case 'APPEND_VIDEO_LIST':
      return [...state, action.video];

    case 'REMOVE_MAIN_VIDEO':
      return state.filter((video, index) => {
        if (index !== action.index) {
          return video;
        }
      });

    case 'UPDATE_VIDEO_LIST':
      return action.videoList;

    default:
      return state;
  }
}
