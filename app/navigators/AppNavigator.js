import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator, Text } from 'react-navigation';
import Index from '../components/screens/Index';
import Expenses from '../components/screens/Expenses';
import Categories from '../components/screens/Categories';

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
  MainTab: {
    screen: Index,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Home'
    },
  },
  ExpensesTab: {
    screen: Expenses,
    path: '/expenses',
    navigationOptions: {
      tabBarLabel: 'Expenses'
    },
  },
  Categories: {
    screen: Categories,
    path: '/categories',
    navigationOptions: {
      tabBarLabel: 'Categories'
    },
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

export const AppNavigator = StackNavigator({
  Root: {
    screen: TabNav,
  },
  Index: {
    screen: Index,
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
