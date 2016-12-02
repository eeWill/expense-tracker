export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_EXPENSE_REQUEST = 'ADD_EXPENSE_REQUEST'
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const FETCH_EXPENSES = 'FETCH_EXPENSES';

export function addExpense(expense) {
  return {
    type: ADD_EXPENSE,
    payload: expense
  }
}

export function addExpenseRequest(expense) {
  return {
    type: ADD_EXPENSE_REQUEST,
    payload: expense
  }
}

export function requestExpenses() {
  return {
    type: REQUEST_EXPENSES
  }
}

export function receiveExpenses(expenses) {
  return {
    type: RECEIVE_EXPENSES,
    expenses
  }
}

export function fetchExpenses() {
  return {
    type: FETCH_EXPENSES
  }
}