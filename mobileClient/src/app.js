import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers/index'
import Router from './config/Router'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    logger
  )
)

sagaMiddleware.run(sagas)


export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    )
  }
}

const styles = {
  container: {
    flex: 1
  }
}
