import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

export default (ProvidedComponent) => {
  class AuthenticatedComponent extends Component{
    componentWillMount(){
      if(!this.props.signedIn){
        hashHistory.push('/')
      }
    }

    render(){
      return <ProvidedComponent {...this.props}/>
    }
  }

  let mapStateToProps = (state) => {
    let { auth: { signedIn }} = state
    return {
      signedIn
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
