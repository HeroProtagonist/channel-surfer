import initialState from './initialState';

export default function videoListReducer(state = initialState.mainVideo, action) {
  switch (action.type) {
    case 'UPDATE_MAIN_PLAYER':
      return action.display;

    default:
      return state;
  }
}
