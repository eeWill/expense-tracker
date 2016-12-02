import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from '../actions'

let baseUrl = "https://www.evwill.com/";

export function fetchExpensesApi() {
  return fetch(baseUrl + "expenses.php")
    .then(response => response.json())
    .then(json => json.map(expense => { 
      return {...expense}
    }))
    .catch(error => ({ error }))
}

export function* fetchExpenses() {
  yield put(actions.requestExpenses());
  const expenses = yield call(fetchExpensesApi);
  yield put(actions.receiveExpenses(expenses))
}

export function addExpenseApi(expense) {
  console.log(baseUrl +  "expenses.php?action=addExpense&expense=" + JSON.stringify(expense));
  return fetch(baseUrl +  "expenses.php?action=addExpense&expense=" + JSON.stringify(expense))
    .then(response => response.json())
    .catch(error => ({ error }))
}

export function* addExpense(action) {
  yield put(actions.addExpense(action.payload))
  yield call(addExpenseApi, action.payload)
}




export function* mySaga() {
  yield takeEvery("FETCH_EXPENSES", fetchExpenses);
  yield takeEvery("ADD_EXPENSE_REQUEST", addExpense);
}


