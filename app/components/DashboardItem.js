import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { primaryColor, whiteColor } from '../colors.js';


class DashboardItem extends Component {
  render() {
    let {iconType, text, onPress} = this.props;

    return (
      <TouchableHighlight 
      style={{margin: 10, flex: 1}}
      underlayColor={whiteColor}
      activeOpacity={.8}
      onPress={onPress}>
        <View style={{...styles.dashboardItem, margin: 0}}>
          <MaterialIcons
            name={iconType}
            size={45}
            style={styles.icon}
          />
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = {
  dashboardItem: {
    flex: 1, 
    backgroundColor: primaryColor, 
    margin: 10, 
    marginBottom: 0,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: whiteColor,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  icon: {
    width: 45,
    color: whiteColor
  },
}

export {DashboardItem}