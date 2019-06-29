import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

// 导入action生成器
import {
  handleInputFocusAction,
  handleInputBlurAction,
  getList,
  handleMouseEnterAction,
  handleMouseLeaveAction,
  handleChangePageAction
} from './store/actionCreators'

import { logoutAction } from '../../pages/login/store/actionCreators'

// 导入样式表
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  NavLeft,
  NavRight,
  NavItemLeft,
  NavItemRight,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'

// 改写成无状态组件
const Header = props => {
  const {
    focused,
    mouseIn,
    handleInputFocus,
    handleInputBlur,
    list,
    totalPage,
    page,
    handleMouseEnter,
    handleMouseLeave,
    handleChangePage,
    login,
    logout
  } = props

  const newList = list.toJS() // 把list转为普通的数组，而不是immutable
  const pageList = []
  if (newList.length) {
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(newList[i])
    }
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavLeft>
            <Link to='/'>
              <NavItemLeft className='active'>首页</NavItemLeft>
            </Link>
            <NavItemLeft href='https://www.jianshu.com/apps'>
              下载App
            </NavItemLeft>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={400} classNames='slide'>
                <NavSearch
                  onFocus={() => {
                    handleInputFocus(list)
                  }}
                  onBlur={handleInputBlur}
                  className={focused ? 'focused' : ''}
                />
              </CSSTransition>
              <i
                className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
              >
                &#xe614;
              </i>
              <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={focused || mouseIn ? '' : 'hidden'}
              >
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch
                    onClick={() => handleChangePage(page, totalPage)}
                  >
                    <i className='iconfont spin'>&#xe851;</i>
                    换一批
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {pageList.map((item, index) => {
                    return (
                      <SearchInfoItem key={item + index}>{item}</SearchInfoItem>
                    )
                  })}
                </SearchInfoList>
              </SearchInfo>
            </SearchWrapper>
          </NavLeft>
          <NavRight>
            <NavItemRight className='right'>
              <i className='iconfont'>&#xe636;</i>
            </NavItemRight>
            {login ? (
              <NavItemRight onClick={logout} className='right'>
                退出
              </NavItemRight>
            ) : (
              <Link to='/login'>
                <NavItemRight className='right'>登陆</NavItemRight>
              </Link>
            )}
          </NavRight>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Link to='/write'>
            <Button className='writting'>
              <i className='iconfont'>&#xe615;</i>写文章
            </Button>
          </Link>
        </Addition>
      </HeaderContent>
    </HeaderWrapper>
  )
}

// 把store的数据state映射到组件中的props，负责取值
const mapStateToProps = state => {
  return {
    // immutable对象的getIn方法，此时的state是一个immutable对象
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

// 把dispatch方法映射到props上，负责更改值
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      // 性能优化，没有数据时，才发送ajax请求
      if (list.size === 0) {
        dispatch(getList()) // redux-thunk发送ajax请求函数
      }
      dispatch(handleInputFocusAction())
    },

    handleInputBlur() {
      dispatch(handleInputBlurAction())
    },

    handleMouseEnter() {
      dispatch(handleMouseEnterAction())
    },

    handleMouseLeave() {
      dispatch(handleMouseLeaveAction())
    },

    handleChangePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(handleChangePageAction(page + 1))
      } else {
        dispatch(handleChangePageAction(1))
      }
    },

    logout() {
      dispatch(logoutAction())
    }
  }
}

// 让 connect 和 TodoList 组件做连接，其实它导出的结果就是一个容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
