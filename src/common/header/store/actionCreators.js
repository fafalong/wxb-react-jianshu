/*
 * action —— header生成器
 */

import axios from 'axios'
import { fromJS } from 'immutable'
// 导入action-type管理器
import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE
} from './actionTypes'

export const handleInputFocusAction = () => {
  return {
    type: SEARCH_FOCUS
  }
}

export const handleInputBlurAction = () => {
  return {
    type: SEARCH_BLUR
  }
}

export const handleMouseEnterAction = () => {
  return {
    type: MOUSE_ENTER
  }
}

export const handleMouseLeaveAction = () => {
  return {
    type: MOUSE_LEAVE
  }
}

export const handleChangePageAction = page => {
  return {
    type: CHANGE_PAGE,
    page: page
  }
}

// redux-thunk发送ajax请求
const getListAction = data => {
  return {
    type: CHANGE_LIST,
    data: fromJS(data), // 注意把它变为immutable对象
    totalPage: Math.ceil(data.length / 10)
  }
}
export const getList = () => {
  return dispatch => {
    axios
      .get(
        'https://www.easy-mock.com/mock/5d15a342c27cf021be578a76/react-jianshu/headerList'
      )
      .then(res => {
        const data = res.data.data
        dispatch(getListAction(data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
