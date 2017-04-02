import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { reducer } from '../reducers/expenses';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from '../sagas/expenses.js';

const middleware = [ thunk ];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

let initialState = {
  expenses: []
}

//Saga
let configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware);
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  );
  sagaMiddleware.run(mySaga)
  return store;
}

export {configureStore}