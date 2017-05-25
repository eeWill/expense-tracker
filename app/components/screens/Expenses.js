import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import ExpenseList from './../ExpenseList';


class Expenses extends Component {
  render() {
    const { expenses } = this.props;
    return <ExpenseList expenses={expenses} />
  }
}

Expenses.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.pageTitle,
  }
}

const mapStateToProps = (state) => ({
  expenses: state.app.expenses,
});

export default connect(mapStateToProps)(Expenses);

