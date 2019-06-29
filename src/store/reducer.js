/*
 * reducer中央处理器
 */

import { combineReducers } from 'redux-immutable' // 将stroe中最外层的reducer中的state转化为immutable对象，并且把多个单独的reducer整合成一个中央reducer

import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer
