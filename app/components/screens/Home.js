import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DashboardItem } from '../DashboardItem.js';
import { primaryColor } from '../../colors.js';

class Home extends Component {

  onPressCharts() {
    console.log('Charts Page');
  }

  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.dashboardTextItem}>
              <Text style={styles.dashboardHeader}>$845</Text>
              <Text style={styles.dashboardSubHeader}>Total {"\n"} Expenses</Text>
            </View>
            <View style={styles.dashboardTextItem}>
              <Text style={styles.dashboardHeader}>$1256</Text>
              <Text style={styles.dashboardSubHeader}>Budget Remaining</Text>
            </View>
          </View>
        </View>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <DashboardItem
              onPress={this.onPressCharts}
              text="Charts"
              iconType="insert-chart" 
            />
            <DashboardItem
              onPress={this.onPressCharts}
              text="Reports"
              iconType="assignment" 
            />
          </View>
        </View>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <DashboardItem
              onPress={this.onPressCharts}
              text="Categories"
              iconType="view-list" 
            />
            <DashboardItem
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
  dashboardTextItem: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: primaryColor,
    backgroundColor: '#EAEAEA',
    borderWidth: 4,
    margin: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  dashboardRow: {
    height: 175,
  },
  dashboardSubHeader: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  dashboardHeader: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#333'
  },
  icon: {
    width: 45,
    color: '#FFF'
  },
}

Home.navigationOptions = ({ navigation }) => {
  return {
    title: "Dashboard",
  }
}

const mapStateToProps = (state) => ({
  expenses: state.app.expenses,
  isFetching: state.app.isFetching
});

export default connect(mapStateToProps)(Home);
