import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native'

class Home extends Component {

  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.dashboardItem}>
              <Text style={styles.dashboardSubHeader}>Total Expenses: $845</Text>
            </View>
            <View style={{...styles.dashboardItem, marginLeft: 0}}>
              <Text style={styles.dashboardSubHeader}>Settings</Text>
            </View>
          </View>
        </View>
        <View style={styles.dashboardRow}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{...styles.dashboardItem, backgroundColor: '#008975'}}>
              <Text style={styles.dashboardSubHeader}>Charts</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

}

const styles = {
  dashboardItem: {
    flex: 1, 
    backgroundColor: '#00AA8D', 
    margin: 5, 
    marginBottom: 0
  },
  dashboardRow: {
    height: 150,
  },
  dashboardSubHeader: {
    color: '#FFF',
    fontSize: 16,
    padding: 5
  }
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
