import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getHomeInfo } from './store/actionCreators'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import BackTop from './components/BackTop'

// React Hooks
function Home(props) {
  // ajax请求
  useEffect(() => {
    props.changeHomeData()
  }, [props])

  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className='banner-img'
          src='//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
          alt=''
        />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
      <BackTop />
    </HomeWrapper>
  )
}

const mapStateToProps = state => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeHomeData() {
      dispatch(getHomeInfo())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
