import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Button, Picker } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux';
import * as actions from './../actions';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Input extends Component {

  addExpense() {
    const { input, addExpense, hideNotification } = this.props;
    if(this.validates(input)) {
      let purchaseDate = moment(input.expenseDate).format('YYYY-MM-DD HH:mm:ss');
      hideNotification();
      addExpense({
        name: input.expenseName,
        price: input.expenseCost,
        category: input.expenseCategory,
        purchaseDate: purchaseDate 
      });
    }
  }

  validates(input) {
    const { showNotification } = this.props;
    if(input.expenseName.length <= 0) {
      showNotification('Please enter an expense.');
      return false;
    }

    if(input.expenseCost.length <= 0) {
      showNotification('Please enter the cost.');
      return false;
    }

    return true;
  }

  calendarIcon = () => (
    <MaterialIcons
      name="date-range"
      size={35}
      style={styles.icon}
    />
  );

  render () {
    const { updateCategory, updateName, updateCost, updateDate } = this.props;
    const input = this.props;
    const categories = this.props.categories || [];
    let categoryTypes = [{label: "Select Category", value: 0}];
    categories.forEach((category) => categoryTypes.push({label: category.name, value: category.id}));

    return (
        <View>
          <TextInput
            placeholder="Expense"
            value={this.props.input.expenseName}
            onChangeText={(name) => updateName(name)}
            style={styles.input}
          />
          <TextInput
            placeholder="Cost"
            value={this.props.input.expenseCost}
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
          <DatePicker
            style={{width: 225}}
            date={this.props.input.expenseDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconComponent={this.calendarIcon()}
            customStyles={{
  
            }}
            onDateChange={(date) => updateDate(date)}
          />          
          <View style={{padding: 50}}>
            <Button
              onPress={() => this.addExpense()}
              title="Submit Expense"
              accessibilityLabel="Submit Expense"
            />
          </View>
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
  updateDate: (date) => {
    dispatch(actions.updateNewExpenseDate(date));
  },
  addExpense: (expense) => {
    dispatch(actions.addExpenseRequest(expense));
  },
  showNotification: (message) => {
    dispatch(actions.showNotification(message));
  },
  hideNotification: () => {
    dispatch(actions.hideNotification());
  },
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
    color: '#000',
    width: 200
  },
  icon: {
    width: 45,
    paddingRight: 10, 
    color: '#333333'
  }
});
