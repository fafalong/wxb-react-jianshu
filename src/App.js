import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom' // 路由
import { GlobalStyled } from './style.js' // 全局reset样式表
import { IconFontGlobalStyled } from './statics/iconfont/iconfont' // 全局iconfont样式
import { Provider } from 'react-redux' // Provider实现数据共享
import store from './store/index'

import Header from './common/header/index'
import Home from './pages/home/index'
import Detail from './pages/detail/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <IconFontGlobalStyled />
      <BrowserRouter>
        <Fragment>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/detail' component={Detail} />
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App
