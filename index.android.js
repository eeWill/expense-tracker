import React, { Component } from 'react';
import { configureStore } from './app/store/configureStore.js'
import { Provider } from 'react-redux'
import App from './app/App.js'
import { AppRegistry } from 'react-native';

const store = configureStore();

export default class ExpenseTracker extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ExpenseTracker', () => ExpenseTracker);
