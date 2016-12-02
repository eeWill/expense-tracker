const types = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REQUEST_EXPENSES: 'REQUEST_EXPENSES',
  RECEIVE_EXPENSES: 'RECEIVE_EXPENSES',
  FETCH_EXPENSES: 'FETCH_EXPENSES'
}

export const actionCreators = {
  addExpense: (expense) => {
    return {type: types.ADD_EXPENSE, payload: expense}
  },
  requestExpenses: (dispatch) => {
    return {
      type: types.REQUEST_EXPENSES
    }
  },
  receiveExpenses: (json) => {
    return {
      type: types.RECEIVE_EXPENSES,
      expenses: json.map(expense => { 
        return {...expense}
      })
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
    case types.ADD_EXPENSE: {
      return {
        ...state,
        expenses: [{label: payload}, ...expenses],
      }
    }
    case types.RECEIVE_EXPENSES: {
      return {
        ...state,
        expenses: action.expenses,
        lastUpdated: action.receivedAt
      }
    }
    case types.REQUEST_EXPENSES: {
      return state;
    }
    default: {
      return state
    }
  }
}