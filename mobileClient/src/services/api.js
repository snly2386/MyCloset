import axios from 'axios'

let baseUrl = 'http://localhost:3000'

export var signIn = (params) => {
  return axios.post(`${baseUrl}/signin`, params).then((response) => {
    console.log('success!', response)
    return { response }
  })
  .catch((error) => {
    console.log('err', error)
    return { error }
  })
}


export var signUp = (params) => {
  return axios.post(`${baseUrl}/signup`, params).then((response) => {
    console.log('success!', response)
    return { response }
  })
  .catch((error) => {
    return { error }
  })
}
