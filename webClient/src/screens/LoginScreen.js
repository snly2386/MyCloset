import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { signInRequest } from '../actions'

class LoginForm extends Component{

  _submitForm = (values) => { this.props.dispatch(signInRequest(values)) }

  render(){
    const { handleSubmit } = this.props

    return(
      <form onSubmit={handleSubmit(this._submitForm.bind(this))}>
        <fieldset>
          <label>Email</label>
          <Field name="email" component="input"/>
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" component="input" type="password"/>
        </fieldset>
        <button action="submit" className="btn btn-primay">
          Sign in
        </button>
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'signin'
})(LoginForm)

class LoginScreen extends Component {

  render(){
    const { error } = this.props
    return(
      <div>
        { error ? <div style={{ color: 'red' }}>{error}</div> : null }
        <LoginForm/>
      </div>
     )
   }
}

let mapStateToProps = (state) => {
  let { auth: { error }} = state

  return {
    error
  }
}

export default connect(mapStateToProps)(LoginScreen)
