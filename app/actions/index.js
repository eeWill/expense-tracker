export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_EXPENSE_REQUEST = 'ADD_EXPENSE_REQUEST'
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const ADD_EXPENSE_COMPLETED = 'ADD_EXPENSE_COMPLETED';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const UPDATE_NEW_EXPENSE_NAME = 'UPDATE_NEW_EXPENSE_NAME';
export const UPDATE_NEW_EXPENSE_CATEGORY = 'UPDATE_NEW_EXPENSE_CATEGORY';
export const UPDATE_NEW_EXPENSE_COST = 'UPDATE_NEW_EXPENSE_COST';
export const UPDATE_NEW_EXPENSE_DATE = 'UPADATE_NEW_EXPENSE_DATE';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const CALCULATE_MONTHLY_TOTAL = 'CALCULATE_MONTHLY_TOTAL';
export const CALCULATE_MONTHLY_BUDGET_REMAINING = 'CALCULATE_MONTHLY_BUDGET_REMAINING';

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

export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
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

export function updateNewExpenseCategory(category) {
  return {
    type: UPDATE_NEW_EXPENSE_CATEGORY,
    category
  }
}

export function updateNewExpenseName(name) {
  return {
    type: UPDATE_NEW_EXPENSE_NAME,
    name
  }
}

export function updateNewExpenseCost(cost) {
  return {
    type: UPDATE_NEW_EXPENSE_COST,
    cost
  }
}

export function updateNewExpenseDate(date) {
  return {
    type: UPDATE_NEW_EXPENSE_DATE,
    date
  }
}

export function showNotification(message) {
  return {
    type: SHOW_NOTIFICATION,
    message
  }
}

export function calculateMonthlyTotal() {
  return {
    type: CALCULATE_MONTHLY_TOTAL
  }
}

export function calculateMonthlyBudgetRemaining() {
  return {
    type: CALCULATE_MONTHLY_BUDGET_REMAINING
  }
}