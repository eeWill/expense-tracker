import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button, BackAndroid, TouchableHighlight, ActivityIndicator } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as actions from './../../actions'
import { NavigationActions } from 'react-navigation';
import Input from './../Input';

class Index extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { fetchServerData } = this.props;
    fetchServerData();
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
    const { goTo, hideNotification, isFetching } = this.props;
    return (
      <View style={styles.pageContainer}>
         {this.props.showMessage &&
          <TouchableHighlight onPress={() => hideNotification()}>
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationText}>{this.props.error}</Text>
            </View>
          </TouchableHighlight>}
          <ActivityIndicator
            animating={isFetching}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        <View style={styles.content}>
          <Input />
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', flex: 3}}>
          <View style={{padding: 50, paddingBottom: 5}}>
            <Button color="#002366" onPress={() => goTo('Expenses')} title="Expenses"/>
          </View>
          <View style={{padding: 50, paddingTop: 5}}>
            <Button color="#002366" onPress={() => goTo('Categories')} title="Categories"/>
          </View>
        </View>
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
    dispatch(actions.fetchCategories());
  },
  hideNotification: () => {
    dispatch(actions.hideNotification());
  }
});


const mapStateToProps = (state) => ({
  showMessage: state.app.showMessage,
  error: state.app.error,
  isFetching: state.app.isFetching
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
    backgroundColor: '#F0F8FF', 
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


export default connect(mapStateToProps, mapDispatchToProps)(Index);

