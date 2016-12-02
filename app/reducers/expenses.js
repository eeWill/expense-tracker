import {
  REQUEST_EXPENSES,
  RECEIVE_EXPENSES,
  FETCH_EXPENSES,
  ADD_EXPENSE
} from '../actions'

export const actionCreators = {
  addExpense: (expense) => {
    return {type: ADD_EXPENSE, payload: expense}
  },
  requestExpenses: (dispatch) => {
    return {
      type: REQUEST_EXPENSES
    }
  },
  receiveExpenses: (expenses) => {
    return {
      type: RECEIVE_EXPENSES,
      expenses
    }
  },
};

const initialState = {
  expenses: [],
}

export const reducer = (state = initialState, action) => {
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
    case REQUEST_EXPENSES: {
      return state;
    }
    default: {
      return state
    }
  }
}