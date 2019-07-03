/* reducer —— home分处理器 */

import { fromJS } from 'immutable'
import { CHANGE_HOME_DATA, ADD_ARTICLE_LIST } from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1 // 当前页码
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
    default:
      return state
  }
}
