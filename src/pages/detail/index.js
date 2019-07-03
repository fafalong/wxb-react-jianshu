import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getDetail } from './store/actionCreators'
import { DetailWrapper, Header, Content } from './style'

// React Hooks
function Detail(props) {
  // ajax请求
  useEffect(() => {
    props.handleGetDetail(props.match.params.id)
  }, [props])

  return (
    <DetailWrapper>
      <Header>{props.title}</Header>
      <Content dangerouslySetInnerHTML={{ __html: props.content }} />
    </DetailWrapper>
  )
}

const mapStateToProps = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetDetail(id) {
      dispatch(getDetail(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
