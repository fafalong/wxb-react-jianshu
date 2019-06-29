import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getDetail } from './store/actionCreators'
import { DetailWrapper, Header, Content } from './style'

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.handleGetDetail(this.props.match.params.id)
  }
}

const mapState = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = dispatch => {
  return {
    handleGetDetail(id) {
      dispatch(getDetail(id))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Detail)
