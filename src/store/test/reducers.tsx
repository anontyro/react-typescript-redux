import {EnthusiasmAction} from './actions';
import {StoreState} from '../index';
import {DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM} from './consts';

export function enthusiasm(
  state: StoreState,
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
