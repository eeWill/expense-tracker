import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from '../actions'


export function fetchExpensesApi() {
  return fetch("https://www.evwill.com/expenses.php")
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

export function* mySaga() {
  yield takeEvery("FETCH_EXPENSES", fetchExpenses);
}
