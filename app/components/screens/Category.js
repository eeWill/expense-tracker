import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'


class Category extends Component {

  render() {
    const {currentCategory} = this.props;
    return (
      <Text style={styles.categoryName}>{currentCategory.name}</Text>
    )
  }

}

Category.navigationOptions = ({ navigation }) => {
  return {
    title: "Category",
  }
}

const mapStateToProps = (state) => ({
  currentCategory: state.app.currentCategory
});


const styles = StyleSheet.create({
  categoryName: {
    padding: 15,
    justifyContent: 'center'
  },
});


export default connect(mapStateToProps)(Category);

