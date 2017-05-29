import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from '../actions'

let baseUrl = "https://forte.evwill.com";

export function fetchExpensesApi() {
  return fetch(baseUrl + "/expenses")
    .then(response => response.json())
    .then(json => json.data.map(expense => {
      return {...expense}
    }))
    .catch(error => ({ error }))
}

export function fetchCategoriesApi() {
  return fetch(baseUrl + "/categories")
    .then(response => response.json())
    .then(json => json.data.map(category => {
      return {...category}
    }))
    .catch(error => ({ error }))
}

export function* fetchExpenses() {
  yield put(actions.requestExpenses());
  const expenses = yield call(fetchExpensesApi);
  yield put(actions.receiveExpenses(expenses))
}

export function* fetchCategories() {
  yield put(actions.requestCategories());
  const categories = yield call(fetchCategoriesApi);
  yield put(actions.receiveCategories(categories));
}

export function addExpenseApi(expense) {

  let theExpense = { 
    name: expense.name,
    cost: expense.price,
    user_id: 1,
    category_id: expense.category,
    company_id: 1, 
    purchase_date: expense.purchaseDate
  }
  
  return fetch(baseUrl + "/expenses", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(theExpense)
  })
  .then(response => {
    if(response.status === 404) {
      return response.status;
    } else {
      return response.json();
    }
  })
  .catch(error => error);
}

export function* addExpense(action) {
   yield put(actions.addExpense(action.payload));
   try {
      const data = yield call(addExpenseApi, action.payload);
      yield put({type: "ADD_EXPENSE_COMPLETED", payload: data})
   } catch (error) {
      console.log(error);
      yield call({type: "ADD_EXPENSE_FAILURE", error});
   }
}

export function* mySaga() {
  yield takeEvery("FETCH_EXPENSES", fetchExpenses);
  yield takeEvery("ADD_EXPENSE_REQUEST", addExpense);
  yield takeEvery("FETCH_CATEGORIES", fetchCategories);
}


