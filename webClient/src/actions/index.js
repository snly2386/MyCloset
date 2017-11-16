import { SIGNIN, SIGNUP, AUTH_ERROR, SIGNOUT } from './types'

export var signInRequest = (payload) => {
  return {
    type: SIGNIN,
    payload
  }
}

export var signUpRequest = (payload) => {
  return {
    type: SIGNUP,
    payload
  }
}

export var signOutRequest = () => {
  return {
    type: SIGNOUT
  }
}
