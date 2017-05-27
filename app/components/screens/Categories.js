import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'


class Categories extends Component {

  keyExtractor = (category, index) => category.id;

  renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.expenseCategory}>{item.name}</Text>
    </View>
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
    title: "Categories",
  }
}

const mapStateToProps = (state) => ({
  categories: state.app.categories,
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderColor: '#d2d2d2',
    padding: 15,
    justifyContent: 'center'
  },
});


export default connect(mapStateToProps)(Categories);

