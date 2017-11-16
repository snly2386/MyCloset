import { put, takeLatest, all, call, take, fork, cancel } from 'redux-saga/effects'
import { hashHistory } from 'react-router'
import { SIGNIN, AUTH_ERROR, SIGNUP, SIGNOUT, SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGNOUT_SUCCESS } from '../actions/types'
import { signInApi } from '../services/api'

function* signIn(action){
  let { response, error } = yield call(signInApi, action.payload)

  if(response){
    yield put({ type: SIGNIN_SUCCESS })
    localStorage.setItem('myclosetToken', response.data.token)
    hashHistory.push('/dashboard')
  } else {
    yield put({ type: AUTH_ERROR, payload: String(error) })
  }
}

function* signUp(){
  console.log("LOLOLOL SIGNED UP")
}

function* signOut(){
  yield put({ type: SIGNOUT_SUCCESS })
  localStorage.removeItem('myclosetToken')
  hashHistory.push('/')
}

export default function* watchAuth(){
  yield [
    takeLatest(SIGNIN, signIn),
    takeLatest(SIGNUP, signUp),
    takeLatest(SIGNOUT, signOut)
  ]
    // const task = yield fork(signIn, signinAction)
    // const signinSubsequentAction = yield take(['SIGNOUT', AUTH_ERROR])
    // if (signinSubsequentAction.type === 'SIGNOUT'){
    //   yield cancel(task)
    // }
    // yield call(signOut)
}
