import {EnthusiasmAction} from './actions';
import {StoreState} from '../index';
import {DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM} from './consts';

const initalState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

export function enthusiasm(
  state: StoreState = initalState,
  action: EnthusiasmAction
): StoreState {
  console.log(`Action: ${action.type}`);
  console.log(state);
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
    case DECREMENT_ENTHUSIASM:
      return {...state, enthusiasmLevel: state.enthusiasmLevel - 1};
  }
  return state;
}
