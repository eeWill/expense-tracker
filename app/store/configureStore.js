import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from '../sagas/expenses.js';
import AppReducer from '../reducers';
import { reduxTimeout } from 'redux-timeout'

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

middleware.push(reduxTimeout());

let initialState = {
  expenses: [],
}

let configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware);
  const store = createStore(
    AppReducer,
    initialState,
    applyMiddleware(...middleware),
  );
  sagaMiddleware.run(mySaga)
  return store;
}

export {configureStore}