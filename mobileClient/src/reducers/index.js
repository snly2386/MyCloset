import React from 'react'
import { combineReducers } from 'redux'
import RootNavigator from '../config/Routes'
import NavReducer from './navReducer'

export default combineReducers({
  nav: NavReducer
})
