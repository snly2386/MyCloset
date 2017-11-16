import { SIGNIN_GENERATOR, SIGNUP_GENERATOR } from './types'

export var signinGenerator = () => {
  return {
    type: SIGNIN_GENERATOR
  }
}

export var signupGenerator = () => {
  return {
    type: SIGNUP_GENERATOR
  }
}
