import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import Index from '../components/screens/Index';
import Expenses from '../components/screens/Expenses';
import Categories from '../components/screens/Categories';

const navigationConfig = {
  initialRouteName: 'Index',
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

export const AppNavigator = StackNavigator({
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
