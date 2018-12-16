import {createStore, combineReducers, applyMiddleware} from 'redux';
import {enthusiasm, enthusiasmInitalState} from './test/reducers';
import {general, generalInitalState} from './general/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export const initialState = {
  enthusiasm: enthusiasmInitalState,
  general: generalInitalState,
};

export const rootReducer = combineReducers({
  enthusiasm,
  general,
});

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const myStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware())
);
