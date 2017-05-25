export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_EXPENSE_REQUEST = 'ADD_EXPENSE_REQUEST'
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const ADD_EXPENSE_COMPLETED = 'ADD_EXPENSE_COMPLETED';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

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

export function addExpenseCompleted(payload) {
  return {
    type: ADD_EXPENSE_COMPLETED,
    payload
  }
}

export function fetchExpenses() {
  return {
    type: FETCH_EXPENSES
  }
}

export function hideNotification() {
  return {
    type: HIDE_NOTIFICATION
  }
}

export function fetchCategories() {
  return {
    type: FETCH_CATEGORIES
  }
}

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}