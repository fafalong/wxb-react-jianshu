/*
 * reducer —— header分处理器
 */

// 导入action-type管理器
import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE
} from './actionTypes'
// 导入Immutable.js库，fromJS把state变成immutable对象
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false, // 控制搜索栏动画
  mouseIn: false, // 鼠标进出搜索栏控制
  list: [], // 热门搜索ajax数据
  page: 1, // 热门搜索页码
  totalPage: 1 // 热门搜索总页数
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的immutable对象
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case CHANGE_LIST:
      // immutable对象的merge方法，相当于接受多个set
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case MOUSE_ENTER:
      return state.set('mouseIn', true)
    case MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}
