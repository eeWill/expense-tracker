import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DashboardButton } from '../DashboardButton.js';
import { DashboardText } from '../DashboardText.js';
import { primaryColor, whiteColor } from '../../colors.js';

class Dashboard extends Component {

  onPressCharts() {
    console.log('Charts Page');
  }

  static navigationOptions = {
    title: "Expense Tracker",
    tabBarLabel: "Dashboard"
  };

  render () {
    let {goTo} = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <DashboardText
              valueText="$845"
              labelText={`Total \n Expenses`}
            />
            <DashboardText
              valueText="$1256"
              labelText={`Budget \n Remaining`}
            />
          </View>
        </View>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <DashboardButton
              onPress={this.onPressCharts}
              text="Charts"
              iconType="insert-chart" 
            />
            <DashboardButton
              onPress={this.onPressCharts}
              text="Reports"
              iconType="assignment" 
            />
          </View>
        </View>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <DashboardButton
              onPress={() => goTo('Categories')}
              text="Categories"
              iconType="view-list" 
            />
            <DashboardButton
              onPress={this.onPressCharts}
              text="Settings"
              iconType="settings" 
            />
          </View>
        </View>
      </View>
    )
  }

}

const styles = {
  dashboardRow: {
    height: 175,
  },
  icon: {
    width: 45,
    color: whiteColor
  },
}



const mapStateToProps = (state) => ({
  expenses: state.app.expenses,
  isFetching: state.app.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  goTo: (route) => {
    dispatch(NavigationActions.navigate({ routeName: route }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
