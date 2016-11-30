import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Header extends Component {
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.title}>
                    ExpenseTracker
                </Text>
            </View>
        )
    }
}

export {Header}

const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
    color: '#666',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
