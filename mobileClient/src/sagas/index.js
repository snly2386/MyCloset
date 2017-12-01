import { put, takeEvery, all, call } from 'redux-saga/effects'
import authSagas from './auth_saga'

export default function* rootSaga(){
  yield all([
    authSagas()
  ])
}
