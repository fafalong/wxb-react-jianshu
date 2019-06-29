import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>大标题</Header>
        <Content>内容</Content>
      </DetailWrapper>
    )
  }
}

export default Detail
