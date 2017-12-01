import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class DashboardScreen extends Component{
  render(){
    console.log("dashboard screen...", this.props)
    return(
      <View style={{ flex: 1 }}>
        <Text>TESTTWO</Text>
      </View>
    )
  }
}
