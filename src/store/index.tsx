import {createStore} from 'redux';
import {enthusiasm} from './test/reducers';

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export const myStore = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});
