import { put, takeEvery, all, call } from 'redux-saga/effects'
import authSagas from './auth_saga'
import { SIGNIN_SUCCESS } from '../actions/types'
// import { signInApi, signOutApi, signUpApi, fetchMessageApi } from '../services/api'

export default function* rootSaga(){
  yield all([
    authSagas()
  ])
}
