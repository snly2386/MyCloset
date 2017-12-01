import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class SigninScreen extends Component{
  _signup = () => console.log('hi')

  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ width: '90%' }}>
          <FormLabel containerStyle={styles.formContainer}>Email</FormLabel>
          <FormInput containerStyle={styles.formContainer}
                     placeholder="Please enter email"/>
          <FormLabel containerStyle={styles.formContainer}>Password</FormLabel>
          <FormInput containerStyle={styles.formContainer}
                     placeholder="Please enter password"/>
          <Button title='Sign In'/>
          <TouchableHighlight>
            <Text>Already have an account?</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = {
  formContainer: {
  }
}
