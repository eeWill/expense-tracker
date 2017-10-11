import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { primaryColor, whiteColor, backgroundColor } from '../colors.js';

class DashboardText extends Component {
  render() {
    let {valueText, labelText} = this.props;

    return (
      <View style={styles.dashboardTextItem}>
        <Text style={styles.dashboardHeader}>{valueText}</Text>
        <Text style={styles.dashboardSubHeader}>{labelText}</Text>
      </View>
    )
  }
}

const styles = {
  dashboardTextItem: {
    flex: 1,
    backgroundColor: whiteColor,
    borderColor: primaryColor,
    backgroundColor: backgroundColor,
    borderWidth: 5,
    margin: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  dashboardSubHeader: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  dashboardHeader: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#333'
  },
}

export {DashboardText}