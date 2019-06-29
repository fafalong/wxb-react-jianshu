# React 开发简书网站 — 笔记

- 安装 css in js 库：`yarn add styled-components`
- react-redux 库的使用
- reducer、actionTypes、actionCreators 的拆分与整合

  > 把以上 3 者拆分出来，reducer 使用 combineReducers 进行整合，类似于分处理器，最后整合成中央处理器。放在新建的某某组件的 store 文件夹下
  > 好处：更容易管理不同组件的数据状态，结构更清晰，核心思想就是多个 reducer + 一个 store

  ```js
  import { combineReducers } from 'redux-immutable'

  export default combineReducers({
    header: headerReducer,
    home: homeReducer
  })
  ```

- 有什么办法让我们在 reducer 处理器，不用每次都对 state 深拷贝？有，请使用 Immutable.js 库

  > Immutable 是一旦创建，就不能被更改的数据。**对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象**。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是是永久数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树结点发生变化，只修改这个结点和受它影响的父节点，其他结点进行共享
  > 我们把 state 变成 Immutable 对象即可。以后就不用手动深拷贝一份 state 副本了。
  > fromJS(xxx)转为 immutable 对象，xxx.toJS() 转为普通 JS 对象。【toJS()函数绝对不要在 connect()修饰函数中调用，引发重新 render，性能极低】

  - **更优：直接使用 redux-immutable 库**

    - 目标：将 state -> Immutable 化

    - 注意：Immutable 它其实有很多坑，如果对数据不可变非常注重，那就用它。否则，谨慎使用

- 本项目使用 redux-thunk 中间件处理异步操作
- 性能优化：使用 PureComponent，**但是你得结合 Immutable 来用，否则有坑**

  ```js
  import React, { PureComponent } from 'react'

  class Home extends PureComponent {}
  ```

- 动态路由传参
- 异步组件实现懒加载：`react-loadable`

  > 跳转至某一页面时，才加载其 js 等文件

  ```js
  import { withRouter } from 'react-router-dom'
  ```
