import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'

class ExpenseList extends Component {

    keyExtractor = (expense, index) => expense.id;

    renderItem = ({item}) => (
      <View style={styles.row}>
        <Text style={styles.expenseName}>{item.name}</Text>
        <Text>${item.cost}</Text>
      </View>
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
    borderColor: '#d2d2d2',
    padding: 15,
  },
  expenseName: {
    width: 250
  }
});