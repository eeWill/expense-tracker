import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'
import * as actions from './actions'
import { Input } from './components/Input.js';
import { Header } from  './components/Header.js';
import { ExpenseList } from './components/ExpenseList.js';
import { addNavigationHelpers } from 'react-navigation';

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  error: state.error,
  showMessage: state.showMessage,
});

const AppNavigator = StackNavigator(AppRouteConfigs);

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('HomeScreen'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer
});


class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    this.fetchExpenses();
  }

  fetchExpenses = () => {
    const {dispatch} = this.props;
    dispatch(actions.fetchExpenses());
  }

  hideNotification = () => {
    const {dispatch} = this.props;
    dispatch(actions.hideNotification());
  }
  
  changePage = (navigator, pageId) => {
    navigator.replace({
      id: pageId,
    });
  }

  renderScene = (route, navigator) => {
    var routeId = route.id;
    console.log(routeId);
    if (routeId === 'AddExpensePage') {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.navbar}>
            <Button
              onPress={() => this.changePage(navigator, "ExpenseListPage")}
              title="View Expenses"
              accessibilityLabel="View Expenses"
            />
          </View>
          <View style={styles.content}>
            <Input addExpense={this.addExpense}/>
          </View>
          {this.props.showMessage &&
          <TouchableHighlight onPress={() => this.hideNotification()}>
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationText}>{this.props.error}</Text>
            </View>
          </TouchableHighlight>}
        </View>
      );
    }
}
}

export default connect(mapStateToProps)(App);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 2, 
    backgroundColor: 'powderblue', 
    alignItems: 'center'
  },
  navbar: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#F0F8FF', 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent:'center'
  },
  notificationContainer: {
    justifyContent:'center',
    padding: 10,
    backgroundColor: '#008F00',
  },
  notificationText: {
    color: 'white',
    textAlign: 'center'
  }
});