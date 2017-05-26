import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Button, Picker } from 'react-native'
import { connect } from 'react-redux';
import * as actions from './../actions';
import moment from 'moment';

class Input extends Component {

  addExpense = () => {
    const { input, addExpense } = this.props;
    addExpense({
      name: input.expenseName,
      price: input.expenseCost,
      category: input.expenseCategory,
      purchaseDate: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  }

  render () {
    const { updateCategory, updateName, updateCost } = this.props;
    const input = this.props;
    const categories = this.props.categories || [];
    let categoryTypes = [{label: "None", value: 0}];
    categories.forEach((category) => categoryTypes.push({label: category.name, value: category.id}));

    return (
        <View>
          <TextInput
            placeholder="Expense"
            onChangeText={(name) => updateName(name)}
            style={styles.input}
          />
          <TextInput
            placeholder="Cost"
            keyboardType="numeric"
            onChangeText={(cost) => updateCost(cost)}
            style={styles.input}
          />
          <Picker
            itemStyle={styles.picker}
            selectedValue={this.props.input.expenseCategory}
            onValueChange={(category) => updateCategory(category)}>
            {categoryTypes.map((category, index) => <Picker.Item key={index} {...category} />)}
          </Picker>
          <Button
            onPress={() => this.addExpense()}
            title="Add Expense"
            accessibilityLabel="Add Expense"
          />
        </View>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.app.categories,
  input: state.input,
});

const mapDispatchToProps = (dispatch) => ({
  goTo: (route) => {
    dispatch(NavigationActions.navigate({ routeName: route }));
  },
  updateName: (name) => {
    dispatch(actions.updateNewExpenseName(name));
  },
  updateCost: (cost) => {
    dispatch(actions.updateNewExpenseCost(cost));
  },
  updateCategory: (category) => {
    dispatch(actions.updateNewExpenseCategory(category));
  },
  addExpense: (expense) => {
    dispatch(actions.addExpenseRequest(expense));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 200,
    color: '#000',
    borderColor: '#fff',
  },
  picker: {
    color: '#000'
  }
});
