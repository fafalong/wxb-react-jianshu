/* action —— home生成器 */

import axios from 'axios'
import { fromJS } from 'immutable'
// 导入action-type管理器
import {
  CHANGE_HOME_DATA,
  ADD_ARTICLE_LIST,
  TOGGLE_TOP_SHOW
} from './actionTypes'

// redux-thunk发送ajax请求
const changeHomeDataAction = data => {
  return {
    type: CHANGE_HOME_DATA,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList)
  }
}
export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get(
        'https://www.easy-mock.com/mock/5d15a342c27cf021be578a76/react-jianshu/home'
      )
      .then(res => {
        const data = res.data.data
        dispatch(changeHomeDataAction(data))
      })
  }
}

// 加载更多数据
const addHomeListAction = (data, nextPage) => {
  return {
    type: ADD_ARTICLE_LIST,
    newList: fromJS(data),
    nextPage: nextPage
  }
}
export const getMoreList = articlePage => {
  return dispatch => {
    axios
      .get(
        `https://www.easy-mock.com/mock/5d15a342c27cf021be578a76/react-jianshu/homeList?articlePage=${articlePage}`
      )
      .then(res => {
        const data = res.data.data
        dispatch(addHomeListAction(data, articlePage + 1))
      })
      .catch(error => {
        throw Error(error)
      })
  }
}

export const toggleTopShow = show => {
  return {
    type: TOGGLE_TOP_SHOW,
    show: show
  }
}
