/* 文章组件 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMoreList } from '../store/actionCreators'
import { ListItem, ListInfo, LoadMore } from '../style'

class List extends PureComponent {
  render() {
    const { articleList, articlePage, handleMoreList } = this.props
    return (
      <div>
        {articleList.map((item, index) => {
          return (
            <Link key={index} to='/detail'>
              <ListItem>
                <img className='pic' src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={() => handleMoreList(articlePage)}>
          加载更多
        </LoadMore>
      </div>
    )
  }
}

const mapState = state => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatch = dispatch => {
  return {
    handleMoreList(articlePage) {
      dispatch(getMoreList(articlePage))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(List)
