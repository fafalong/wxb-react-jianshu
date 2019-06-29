/* reducer —— home分处理器 */

import { fromJS } from 'immutable'
import {
  CHANGE_HOME_DATA,
  ADD_ARTICLE_LIST,
  TOGGLE_TOP_SHOW
} from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1, // 当前页码
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: action.topicList,
    articleList: action.articleList,
    recommendList: action.recommendList
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.newList),
    articlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case ADD_ARTICLE_LIST:
      return addArticleList(state, action)
    case TOGGLE_TOP_SHOW:
      return state.merge({
        showScroll: action.show
      })
    default:
      return state
  }
}
