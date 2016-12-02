import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView } from 'react-native'

class ExpenseList extends Component {

    render () {
        let {expenses} = this.props;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(expenses)

        return (
          <View style={{flex: 1, paddingTop: 4}}>
            <ListView
              dataSource={data}
              renderRow={(expense) =>
                <View style={styles.row}>
                  <View style={{flex: 1, }}>
                    <Text>{expense.name}</Text>
                  </View>
                  <View style={{flex:1}}>
                    <Text>{expense.price}</Text>
                  </View>
                </View> 
              }
            />
          </View>
        )
    }
}

export {ExpenseList}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderColor: '#000',
    padding: 5
  }
});