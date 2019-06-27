import React, { Fragment } from 'react'
import { GlobalStyled } from './style.js' // 全局reset样式表
import { IconFontGlobalStyled } from './statics/iconfont/iconfont' // 全局iconfont样式
import Header from './common/header/index'

function App() {
  return (
    <Fragment>
      <GlobalStyled />
      <IconFontGlobalStyled />
      <Header />
    </Fragment>
  )
}

export default App
