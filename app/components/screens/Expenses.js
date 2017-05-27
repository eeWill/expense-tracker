import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import ExpenseList from './../ExpenseList';
import Input from './../Input';

class Expenses extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <View>
        <ExpenseList expenses={expenses} />
      </View>
    )
  }
}

Expenses.navigationOptions = ({ navigation }) => {
  return {
    title: "Expenses",
  }
}

const mapStateToProps = (state) => ({
  expenses: state.app.expenses,
});

export default connect(mapStateToProps)(Expenses);

