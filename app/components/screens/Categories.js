import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';


class Categories extends Component {

  keyExtractor = (category, index) => category.id;
  
  renderItem = ({item, goTo}) => (
    <View style={styles.row}>
      <TouchableHighlight 
        style={styles.expenseCategory}
        onPress={() => goTo('Category')}>
          <Text>{item.name}</Text>
        </TouchableHighlight>
    </View>
  );

  render() {
    const {categories, goTo} = this.props;
    return (
      <FlatList
        data={categories}
        keyExtractor={this.keyExtractor}
        renderItem={({item}) =>  <View style={styles.row}>
        <TouchableHighlight 
          style={styles.expenseCategory}
          onPress={() => goTo('Category')}>
            <Text>{item.name}</Text>
          </TouchableHighlight>
      </View>}
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

const mapDispatchToProps = (dispatch) => ({
  goTo: (route) => {
    dispatch(NavigationActions.navigate({ routeName: route }));
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(Categories);

