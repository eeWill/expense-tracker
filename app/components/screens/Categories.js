import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'


class Categories extends Component {

  keyExtractor = (category, index) => category.id;

  renderItem = ({item}) => (
    <Text>{item.name}</Text>
  );

  render() {
    const {categories} = this.props;
    return (
      <FlatList
        data={categories}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    )
  }

}

Categories.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.pageTitle,
  }
}

const mapStateToProps = (state) => ({
  categories: state.app.categories,
});


export default connect(mapStateToProps)(Categories);

