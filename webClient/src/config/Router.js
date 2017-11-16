import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import LoginScreen from '../screens/LoginScreen'
import AuthenticatedComponent from '../components/containers/AuthenticatedContainer'
import DashboardScreen from '../screens/DashboardScreen'
import AuthenticatedLayout from '../components/layout/AuthenticatedLayout'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={LoginScreen}></Route>
      <Route path="/authenticated" component={AuthenticatedComponent(AuthenticatedLayout)}>
        <Route path="/dashboard" component={DashboardScreen}></Route>
      </Route>
    </Router>
  )
}


export default Routes
