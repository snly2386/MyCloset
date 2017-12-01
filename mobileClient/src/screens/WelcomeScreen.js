import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

export default class WelcomeScreen extends Component{

  _login = () => this.props.navigation.navigate('signup')

  render(){
    return(
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scrollContainer}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}>
          <View style={[styles.slide, { backgroundColor: 'turquoise'}]}>
            <Text style={styles.text}>hi thre</Text>
          </View>
          <View style={[styles.slide, { backgroundColor: 'red' }]}>
            <Text style={styles.text}>check your shit</Text>
          </View>
          <View style={[styles.slide, { backgroundColor: 'blue' }]}>
            <Text style={[styles.text]}>really</Text>
            <Button title="Get Started"
                    buttonStyle={{ backgroundColor: 'lightblue'}}
                    containerViewStyle={{ marginTop: 25 }}
                    raised
                    onPress={this._login}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  scrollContainer: {
    flex: 1
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  text: {
    color: '#fff',
    fontSize: 30
  }
}
