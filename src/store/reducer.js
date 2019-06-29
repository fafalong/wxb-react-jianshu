/*
 * reducer中央处理器
 */

import { combineReducers } from 'redux-immutable' // 将stroe中最外层的reducer中的state转化为immutable对象，并且把多个单独的reducer整合成一个中央reducer

import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import detailReducer from '../pages/detail/store/reducer'
import loginlReducer from '../pages/login/store/reducer'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginlReducer
})

export default reducer
