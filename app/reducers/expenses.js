const types = {
  ADD_EXPENSE: 'ADD_EXPENSE',
}

export const actionCreators = {
  addExpense: (expense) => {
    return {type: types.ADD_EXPENSE, payload: expense}
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
    default: {
      return state
    }
  }
}