import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { signUpRequest } from '../actions/index'

class SignupScreen extends Component{
  state = { email: '', password: '' }

  signup = () => {
    if(this.state.email && this.state.password){
      let { email, password } = state
         , payload = { email, password}


      this.props.dispatch(signUpRequest())
    }
  }

  render(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ width: '90%' }}>
          <FormLabel containerStyle={styles.formContainer}>Email</FormLabel>
          <FormInput containerStyle={styles.formContainer}
                     placeholder="Please enter email" onChangeText={(email) => this.setState({ email })}/>
          <FormLabel containerStyle={styles.formContainer}>Password</FormLabel>
          <FormInput containerStyle={styles.formContainer}
                     placeholder="Please enter password"
                     onChangeText={(password) => this.setState({ password })}/>
          <Button title='Sign Up'
                  onPress={this.signup}/>
          <TouchableHighlight>
            <Text>Already have an account?</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    hi: 'hi'
  }
}

export default connect(mapStateToProps)(SignupScreen)

const styles = {
  formContainer: {
  }
}
