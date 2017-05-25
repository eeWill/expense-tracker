import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, BackAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as actions from './../../actions'
import { NavigationActions } from 'react-navigation';

class Index extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchServerData } = this.props;
    fetchServerData();
  }
  
  hideNotification = () => {
    const {dispatch} = this.props;
    dispatch(actions.hideNotification());
  }

  handleBackPress = () => {
    const { back } = this.props;
    back();
    return true;
  };

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {
    const { goTo } = this.props;
    return (
      <View>
        <Text>Index Screen!</Text>
        <Button onPress={() => goTo('Expenses')} title="Expenses"/>
        <Button onPress={() => goTo('Categories')} title="Categories"/>
      </View>
    )
  }

}

Index.navigationOptions = ({ navigation }) => {
  return {
    title: "Expense Tracker",
  }
}

const mapDispatchToProps = (dispatch) => ({
  back: () => {
    dispatch({type: "Navigation/BACK"});
  },
  goTo: (route) => {
    dispatch(NavigationActions.navigate({ routeName: route }));
  },
  fetchServerData: () => {
    dispatch(actions.fetchExpenses());
    dispatch(actions.fetchCategories());
  },
});

export default connect(null, mapDispatchToProps)(Index);

