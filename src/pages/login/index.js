import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './store/actionCreators'
import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder='账号'
              ref={input => {
                this.account = input
              }}
            />
            <Input
              placeholder='密码'
              type='password'
              ref={input => {
                this.password = input
              }}
            />
            <Button
              onClick={() =>
                this.props.handleLogin(this.account, this.password)
              }
            >
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

const mapDispatch = dispatch => {
  return {
    handleLogin(accountElem, passwordElem) {
      dispatch(login(accountElem.value, passwordElem.value))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Login)
