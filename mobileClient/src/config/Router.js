import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import RootNavigator from './Routes'

class Router extends Component {
  render(){
    return(
      <RootNavigator navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav
      })}/>
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps)(Router)
