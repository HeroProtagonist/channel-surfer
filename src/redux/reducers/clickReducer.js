import initialState from './initialState';

export default function clickReducer(state = initialState.click, action) {
  switch (action.type) {
    case 'UPDATE_CLICK':
      return action.click;

    default:
      return state;
  }
}
