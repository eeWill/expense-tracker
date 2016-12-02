export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const FETCH_EXPENSES = 'FETCH_EXPENSES';

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