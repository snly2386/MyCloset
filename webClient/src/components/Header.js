import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOutRequest } from '../actions'

class Header extends Component {
  _signOut = () => { this.props.dispatch(signOutRequest())}

  render(){
    return(
      <div>
        HEADER HERE
        <a onClick={this._signOut} style={{ color: 'blue'}}>Sign Out</a>
      </div>
    )
  }
}

export default connect()(Header)
