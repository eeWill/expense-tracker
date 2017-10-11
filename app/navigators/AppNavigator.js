import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator, Text } from 'react-navigation';
import AddExpense from '../components/screens/AddExpense';
import Expenses from '../components/screens/Expenses';
import Categories from '../components/screens/Categories';
import Home from '../components/screens/Home';
import { darkPrimaryColor, whiteColor } from '../colors.js';

const navigationConfig = {
  initialRouteName: 'Root',
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: darkPrimaryColor,
    },
    headerTitleStyle: {
      color: whiteColor
    },
    headerBackTitleStyle: {
      color: whiteColor
    }
  }
}

const TabNav = TabNavigator({
  HomeTab: {
    screen: Home,
    path: '/dashboard',
    navigationOption: {
      tabBarLabel: 'Home'
    }
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
  Home: {
    screen: Home
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
