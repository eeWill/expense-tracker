import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'


class Categories extends Component {

  render() {
    return <Text>Categories Screen!</Text>
  }

}

Categories.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.pageTitle,
  }
}


export default Categories;

