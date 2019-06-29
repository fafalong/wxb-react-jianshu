import axios from 'axios'
import { CHANGE_LOGIN, LOGOUT } from './actionTypes'

export const logoutAction = () => ({
  type: LOGOUT,
  value: false
})

const changeLogin = () => ({
  type: CHANGE_LOGIN,
  value: true
})
export const login = (accout, password) => {
  return dispatch => {
    axios
      .get(
        'https://www.easy-mock.com/mock/5d15a342c27cf021be578a76/react-jianshu/login?account=' +
          accout +
          '&password=' +
          password
      )
      .then(res => {
        const result = res.data.data
        if (result) {
          dispatch(changeLogin())
        } else {
          alert('登陆失败')
        }
      })
      .catch(error => {
        throw Error(error)
      })
  }
}
