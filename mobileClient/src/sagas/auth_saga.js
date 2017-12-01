import { put, takeLatest } from 'redux-saga/effects'
import { SIGNUP_SUCCESS, AUTH_ERROR, SIGNIN_REQUEST, SIGNUP_REQUEST, SIGNOUT_REQUEST, SIGNIN_SUCCESS } from '../actions/types'
import { signUp as signUpApi} from '../services/api'

function* signIn(action){
//   let { response, error } = yield call(signInApi, action.payload)
//
//   if(response){
//     yield put({ type: SIGNIN_SUCCESS })
//     localStorage.setItem('myclosetToken', response.data.token)
//     hashHistory.push('/dashboard')
//   } else {
//     yield put({ type: AUTH_ERROR, payload: String(error) })
//   }
}

function* signUp({ payload }){
  let { response, error } = yield call(signUpApi, payload)

  if(response){
    // yield put({ type: SIGNUP_SUCCESS })
  } else {
    // yield put({ type: AUTH_ERROR, payload: String(error) })
  }
}

function* signOut(){
//   yield put({ type: SIGNOUT_SUCCESS })
//   localStorage.removeItem('myclosetToken')
//   hashHistory.push('/')
}

export default function* watchAuth(){
  yield [
    takeLatest(SIGNIN_REQUEST, signIn),
    takeLatest(SIGNUP_REQUEST, signUp),
    takeLatest(SIGNOUT_REQUEST, signOut)
  ]
    // const task = yield fork(signIn, signinAction)
    // const signinSubsequentAction = yield take(['SIGNOUT', AUTH_ERROR])
    // if (signinSubsequentAction.type === 'SIGNOUT'){
    //   yield cancel(task)
    // }
    // yield call(signOut)
}
