import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import './styles/index.scss'
import Routes from './config/Router'
import { SIGNIN_SUCCESS } from './actions/types'
import rootReducer from './reducers'
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

const token = localStorage.getItem('myclosetToken')

if(token){
  store.dispatch({ type: SIGNIN_SUCCESS })
}

class App extends Component {
  render(){
    console.log(Routes)
    return(
      <div>
        <Provider store={store}>
          <Routes/>
        </Provider>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
