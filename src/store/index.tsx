import {createStore, combineReducers, applyMiddleware} from 'redux';
import {enthusiasm} from './test/reducers';

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export const initialState = {
  enthusiasm: {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
};

export const rootReducer = combineReducers({
  enthusiasm,
});

export const myStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware()
);
