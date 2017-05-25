import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'

class ExpenseList extends Component {

    keyExtractor = (expense, index) => expense.id;

    renderItem = ({item}) => (
      <Text>{item.name}</Text>
    );

    render () {
        let {expenses} = this.props;
        return (
          <FlatList
            data={expenses}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        )
    }
}

export default ExpenseList;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderColor: '#000',
    padding: 5
  }
});