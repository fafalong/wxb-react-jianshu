/* action —— detail生成器 */
import axios from 'axios'
import { GET_DETAIL } from './actionTypes'

const getDetailAction = (title, content) => {
  return {
    type: GET_DETAIL,
    title: title,
    content: content
  }
}
export const getDetail = id => {
  return dispatch => {
    axios
      .get(
        'https://www.easy-mock.com/mock/5d15a342c27cf021be578a76/react-jianshu/detail?id=' +
          id
      )
      .then(res => {
        const data = res.data.data
        dispatch(getDetailAction(data.title, data.content))
      })
      .catch(error => {
        throw Error(error)
      })
  }
}
