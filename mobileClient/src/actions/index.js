import { SIGNUP_REQUEST, SIGNIN_REQUEST } from './types'

export var signInRequest = (payload) => {
  return {
    type: SIGNIN_REQUEST,
    payload
  }
}

export var signUpRequest = (payload) => {
  return {
    type: SIGNUP_REQUEST,
    payload
  }
}
