import React, { Component } from 'react';
import { configureStore } from './app/store/configureStore.js'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import AppWithNavigationState from './app/navigators/AppNavigator.js';

const store = configureStore();

export default class ExpenseTracker extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ExpenseTracker', () => ExpenseTracker);
