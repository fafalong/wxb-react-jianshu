/* reducer —— detail分处理器 */

import { fromJS } from 'immutable'
import { GET_DETAIL } from './actionTypes'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}
