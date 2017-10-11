import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, BackAndroid, TouchableHighlight, ActivityIndicator } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as actions from './../../actions'
import { NavigationActions } from 'react-navigation';
import Input from './../Input';
import moment from 'moment'; 
import { addTimeout } from 'redux-timeout'

class AddExpense extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchCategories, addTimeout, hideNotification } = this.props;
    fetchCategories();
    addTimeout(3000, actions.ADD_EXPENSE_COMPLETED, hideNotification);  
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
    const { goTo, hideNotification, isAddingExpense } = this.props;
    return (
      <View style={styles.pageContainer}>
        <View style={{flex: 2}}>
         {this.props.showMessage &&
          <TouchableHighlight onPress={() => hideNotification()}>
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationText}>{this.props.error}</Text>
            </View>
          </TouchableHighlight>}
          {isAddingExpense &&
          <ActivityIndicator
            style={[styles.centering, {height: 80}]}
            size="large"
          />}
        </View>
        <View style={styles.content}>
          <Input />
        </View>
      </View>
    )
  }

}

AddExpense.navigationOptions = ({ navigation }) => {
  return {
    title: "Add Expense",
  }
}

const mapDispatchToProps = (dispatch) => ({
  back: () => {
    dispatch({type: "Navigation/BACK"});
  },
  goTo: (route) => {
    dispatch(NavigationActions.navigate({ routeName: route }));
  },
  fetchCategories: () => {
    dispatch(actions.fetchCategories());
  },
  hideNotification: () => {
    dispatch(actions.hideNotification());
  },
  addTimeout: (timeout, action, fn) => {
    dispatch(addTimeout(timeout, action, fn))
  }
});

const mapStateToProps = (state) => ({
  showMessage: state.app.showMessage,
  error: state.app.error,
  isAddingExpense: state.app.isAddingExpense
});

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    height: 50,
    width: 200,
    color: '#999',
    borderColor: '#fff',
  },
  notificationContainer: {
    height: 30,
    justifyContent:'center',
    padding: 5,
    backgroundColor: '#008F00',
  },
  notificationText: {
    color: 'white',
    textAlign: 'center'
  },
  content: {
    flex: 12, 
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent:'center'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);

