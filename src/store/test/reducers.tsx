import {EnthusiasmAction} from './actions';
import {DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM} from './consts';

export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

const initalState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

export function enthusiasm(
  state: StoreState = initalState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel - 1};
  }
  return state;
}
