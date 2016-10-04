import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const enhancers = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default function configureStore() {
  return createStore(
    rootReducer,
    enhancers,
  );
}
