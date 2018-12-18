import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {enthusiasm, enthusiasmInitalState, StoreState} from './test/reducers';
import {general, generalInitalState, GeneralState} from './general/reducers';
import {
  messageInitalState,
  message,
  MessageState,
} from './chat/message/reducers';
import {UserState, userInitalState} from './chat/user/reducers';
import {users} from './chat/user/reducers';
export interface MyAppState {
  enthusiasm: StoreState;
  general: GeneralState;
  message: MessageState;
  users: UserState;
}

export const initialState = {
  enthusiasm: enthusiasmInitalState,
  general: generalInitalState,
  message: messageInitalState,
  users: userInitalState,
};

export const rootReducer = combineReducers({
  enthusiasm,
  general,
  message,
  users,
});

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const myStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware())
);
