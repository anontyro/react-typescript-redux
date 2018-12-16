import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {enthusiasm, enthusiasmInitalState} from './test/reducers';
import {general, generalInitalState} from './general/reducers';
import {messageInitalState, message} from './chat/message/reducers';
export const initialState = {
  enthusiasm: enthusiasmInitalState,
  general: generalInitalState,
  message: messageInitalState,
};

export const rootReducer = combineReducers({
  enthusiasm,
  general,
  message,
});

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const myStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware())
);
