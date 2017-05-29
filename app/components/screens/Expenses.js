import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, BackAndroid, ActivityIndicator } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import ExpenseList from './../ExpenseList';
import Input from './../Input';

class Expenses extends Component {

  componentWillMount() {
    const { fetchExpenses } = this.props;
    fetchExpenses();    
  }

  render() {
    const { expenses, isFetching } = this.props;
    return (
      <View>
          {isFetching && <ActivityIndicator
            animating={isFetching}
            style={[styles.centering, {height: 80}]}
            size="large"
          />}
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
  isFetching: state.app.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchExpenses: () => {
    dispatch(actions.fetchExpenses());
  }
});

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

