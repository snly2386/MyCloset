import { SIGNIN_SUCCESS, SIGNUP_SUCCESS, AUTH_ERROR } from '../actions/types'

let initalState = {
  error: '',
  currentUser: '',
  token: ''
}

const authReducer = (state = initalState, action) => {
  switch(action.type){
    case SIGNIN_SUCCESS:

      return state
      break

    case SIGNUP_SUCCESS:

      return state
      break

    default:
      return state
  }
}
