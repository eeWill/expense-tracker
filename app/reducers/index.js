import { combineReducers } from 'redux';
import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES,
  FETCH_EXPENSES,
  ADD_EXPENSE,
  ADD_EXPENSE_COMPLETED,
  HIDE_NOTIFICATION,
  RECEIVE_CATEGORIES,
  REQUEST_CATEGORIES,
  UPDATE_NEW_EXPENSE_NAME,
  UPDATE_NEW_EXPENSE_CATEGORY,
  UPDATE_NEW_EXPENSE_COST,
  SHOW_NOTIFICATION,
  UPDATE_NEW_EXPENSE_DATE
} from '../actions'
import moment from 'moment';

import { AppNavigator } from '../navigators/AppNavigator';

function nav(state, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

const initialState = {
  isFetching: false,
  isAddingExpense: false
}

export const app = (state = initialState, action) => {
  const {type, payload} = action
  const {expenses} = state

  switch(type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        isAddingExpense: true
      }
    }
    case RECEIVE_EXPENSES: {
      return {
        ...state,
        expenses: action.expenses,
        isFetching: false,
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
        showMessage: true,
        isAddingExpense: false
      }
    }
    case REQUEST_EXPENSES: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case FETCH_EXPENSES: {
      return {
        ...state,
        isFetching: true
      }
    }
    case REQUEST_CATEGORIES: {
      return {
        ...state
      }
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        showMessage: false
      }
    }
    case SHOW_NOTIFICATION: {
      return {
        ...state,
        showMessage: true,
        error: action.message
      }
    }
    case RECEIVE_CATEGORIES: {
      return {
        ...state,
        categories: action.categories,
      }
    }
    default: {
      return state
    }
  }
}

initialInputState = {
  expenseName: '',
  expenseCategory: 0,
  expenseCost: '',
  expenseDate: moment().format('YYYY-MM-DD')
}

export const input = (state = initialInputState, action) => {
  const {type, payload} = action

  switch(type) {
    case ADD_EXPENSE_COMPLETED: {
      return {
        ...state,
        expenseName: '',
        expenseCost: '',
        expenseCategory: 0
      }
    }
    case UPDATE_NEW_EXPENSE_NAME: {
      return {
        ...state,
        expenseName: action.name,
      }
    }
    case UPDATE_NEW_EXPENSE_CATEGORY: {
      return {
        ...state,
        expenseCategory: action.category,
      }
    }
    case UPDATE_NEW_EXPENSE_COST: {
      return {
        ...state,
        expenseCost: action.cost,
      }
    }
    case UPDATE_NEW_EXPENSE_DATE: {
      return {
        ...state,
        expenseDate: action.date
      }
    }
    default: {
      return state
    }
  }
}

const AppReducer = combineReducers({
  nav,
  app,
  input
});

export default AppReducer;