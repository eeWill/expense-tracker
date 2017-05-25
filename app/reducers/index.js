import { combineReducers } from 'redux';
import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES,
  FETCH_EXPENSES,
  ADD_EXPENSE,
  ADD_EXPENSE_COMPLETED,
  HIDE_NOTIFICATION,
  RECEIVE_CATEGORIES
} from '../actions'

import { AppNavigator } from '../navigators/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Index'));

function nav(state = initialNavState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

const initialState = []

export const app = (state = initialState, action) => {
  const {type, payload} = action
  const {expenses} = state

  switch(type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenses: [payload, ...expenses],
      }
    }
    case RECEIVE_EXPENSES: {
      return {
        ...state,
        expenses: action.expenses,
        lastUpdated: action.receivedAt
      }
    }
    case ADD_EXPENSE_COMPLETED: {
      let error;
      if((action.payload == 404)||(action.payload == 500)) {
        error = "There was a problem adding expense, please try again";
      } else {
        error = "Item added successfully."
      }
      return {
        ...state,
        error,
        showMessage: true
      }
    }
    case REQUEST_EXPENSES: {
      return state;
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        showMessage: false
      }
    }
    case RECEIVE_CATEGORIES: {
      return {
        ...state,
        categories: action.categories
      }
    }
    default: {
      return state
    }
  }
}

const AppReducer = combineReducers({
  nav,
  app
});

export default AppReducer;