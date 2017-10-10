import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator, Text } from 'react-navigation';
import Index from '../components/screens/Index';
import Expenses from '../components/screens/Expenses';
import Categories from '../components/screens/Categories';
import Home from '../components/screens/Home';

const navigationConfig = {
  initialRouteName: 'Root',
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    },
    headerBackTitleStyle: {
      color: '#FFFFFF'
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
    screen: Index,
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
  /*
  Categories: {
    screen: Categories,
    path: '/categories',
    navigationOptions: {
      tabBarLabel: 'Categories'
    },
  },
  */
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

export const AppNavigator = StackNavigator({
  Root: {
    screen: TabNav,
  },
  Home: {
    screen: Home
  },
  Index: {
    screen: Index
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
