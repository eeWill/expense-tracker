import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import { connect } from 'react-redux'
import { actionCreators } from './reducers/expenses.js'
import * as actions from './actions'
import { Input } from './components/Input.js';
import { Header } from  './components/Header.js';

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

class App extends Component {

  addExpense = (expense) => {
    const {dispatch} = this.props
    dispatch(actions.fetchExpenses());
  };

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.content}>
          <Input addExpense={this.addExpense}/>
        </View>
      </View>
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
    flex: 1, 
    backgroundColor: 'powderblue', 
    alignItems: 'center'
  },
  content: {
    flex: 6, 
    backgroundColor: '#F0F8FF', 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent:'center'
  }
});