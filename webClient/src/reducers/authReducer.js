import { AUTH_ERROR, SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGNOUT_SUCCESS } from '../actions/types'

let initalState = {
  error: false,
  signedIn: false
}

export default (state = {}, action) => {
  switch(action.type){
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        error: ''
      }
      break

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedIn: true,
        error: 'false'
      }
      break

    case AUTH_ERROR:
      let error = action.payload

      console.log('error here!!!', error)

      return {
        ...state,
        error
      }
      break

    case SIGNOUT_SUCCESS:
      return {
        ...state,
        signedIn: false
      }
    default:
      return state
  }
}
