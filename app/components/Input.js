import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 200,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
});

class Input extends Component {

  state = {
    text: '',
  }

  onSubmitEditing = (event) => {
    console.log(event.nativeEvent.text);
  }

  addExpense = () => {
    const {addExpense} = this.props;
    const expense = this.state.text;

    addExpense(expense)
  }

  render () {
    const {text} = this.state

    return (
        <View>
          <TextInput
            placeholder="This is a placeholder"
            onChangeText={(text) => this.setState({text})}
            style={styles.input}
            value={text}
            onSubmitEditing={this.onSubmitEditing}
          />
          <Button
            onPress={this.addExpense}
            title="Add Expense"
            accessibilityLabel="Add Expense"
          />
        </View>
    )
  }
}

export {Input}
