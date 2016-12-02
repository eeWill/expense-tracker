import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Button, Picker } from 'react-native'

class Input extends Component {

  state = {
    name: '',
    price: '',
    category: 'food'
  }

  addExpense = () => {
    this.props.addExpense({
      name: this.state.name,
      price: this.state.price,
      category: this.state.category,
      insertTime: Date.now()
    });
  }

  render () {
    const {name} = this.state;
    const {price} = this.state;
    const {category} = this.state;

    return (
        <View>
          <TextInput
            placeholder="Expense"
            onChangeText={(name) => this.setState({name})}
            style={styles.input}
            value={name}
          />
          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            onChangeText={(price) => this.setState({price})}
            style={styles.input}
            value={price}
          />
          <Picker
            itemStyle={styles.picker}
            selectedValue={category}
            onValueChange={(category) => this.setState({category: category})}>
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Misc" value="misc" />
            <Picker.Item label="Transportation" value="transportation" />
            <Picker.Item label="Coffee" value="coffee" />
            <Picker.Item label="Alcohol" value="alcohol" />
            <Picker.Item label="Rent/Utilities" value="rent" />
            <Picker.Item label="Loan" value="loan" />
          </Picker>
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
