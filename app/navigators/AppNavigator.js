import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator, Text } from 'react-navigation';
import AddExpense from '../components/screens/AddExpense';
import Expenses from '../components/screens/Expenses';
import Categories from '../components/screens/Categories';
import Dashboard from '../components/screens/Dashboard';
import { darkPrimaryColor, whiteColor } from '../colors.js';

const navigationConfig = {
  initialRouteName: 'Root',
  headerMode: 'screen',
  navigationOptions: {
    headerTintColor: whiteColor,
    headerStyle: {
      backgroundColor: darkPrimaryColor,
    },
    headerTitleStyle: {
      color: whiteColor
    },
  }
}

const TabNav = TabNavigator({
  DashboardTab: {
    screen: Dashboard,
    path: '/dashboard',
  },
  MainTab: {
    screen: AddExpense,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Add Expense'
    },
  },
  ExpensesTab: {
    screen: Expenses,
    path: '/expenses',
    navigationOptions: {
      tabBarLabel: 'Transactions'
    },
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    style: {
      backgroundColor: darkPrimaryColor
    }
  }
});

export const AppNavigator = StackNavigator({
  Root: {
    screen: TabNav,
  },
  Dashboard: {
    screen: Dashboard
  },
  Index: {
    screen: AddExpense
  },
  Expenses: {
    screen: Expenses
  },
  Categories: {
    screen: Categories
  }
}, navigationConfig);

const AppWithNavigationState = ({ dispatch, nav, pageTitle }) => (
  <AppNavigator navigation={addNavigationHelpers({ 
    dispatch, 
    state: nav, 
    pageTitle 
  })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
