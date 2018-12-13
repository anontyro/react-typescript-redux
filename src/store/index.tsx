import {createStore, combineReducers, applyMiddleware} from 'redux';
import {enthusiasm} from './test/reducers';
import {general} from './general/reducers';

export const initialState = {
  enthusiasm: {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  general: {
    username: 'init',
  },
};

export const rootReducer = combineReducers({
  enthusiasm,
  general,
});

export const myStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware()
);
