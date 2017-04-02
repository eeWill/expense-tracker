import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToastAndroid,
  Button,
} from 'react-native';
import { connect } from 'react-redux'
import { actionCreators } from './reducers/expenses.js'
import * as actions from './actions'
import { Input } from './components/Input.js';
import { Header } from  './components/Header.js';
import { ExpenseList } from './components/ExpenseList.js';

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  error: state.error
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

  addExpense = (expense) => {
    const {dispatch} = this.props;
    dispatch(actions.addExpenseRequest(expense));
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
          <Text>{this.props.error}</Text>
        </View>
      );
    }
    if (routeId === 'ExpenseListPage') {
        return (
          <View style={styles.container} >
            <Button
              onPress={() => this.changePage(navigator, "AddExpensePage")}
              title="Back"
              accessibilityLabel="View Expenses"
            />
            <ExpenseList expenses={this.props.expenses} />
          </View>
        );
    }
}


  render () {
    
    return (
      <Navigator
        initialRoute={{id: 'AddExpensePage', name: 'Add Expense'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
      }}/>
    )   
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
    flex: 9, 
    backgroundColor: '#F0F8FF', 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent:'center'
  }
});