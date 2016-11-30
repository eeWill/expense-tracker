import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'
import { actionCreators } from './reducers/expenses.js'
import { Input } from './components/Input.js';
import { Header } from  './components/Header.js';

const mapStateToProps = (state) => ({
  expenses: state.expenses,
})

class App extends Component {

  addExpense = (expense) => {
    const {dispatch} = this.props
    dispatch(actionCreators.addExpense(expense))
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
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
  content: {
    flex: 2, 
    backgroundColor: 'skyblue', 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent:'center'
  }
});