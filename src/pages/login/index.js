import React, { useRef, useCallback } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './store/actionCreators'
import { LoginWrapper, LoginBox, Input, Button } from './style'

// React Hooks
function Login(props) {
  const inputAccountEl = useRef(null)
  const inputPasswordEl = useRef(null)

  // useCallback提升性能
  const onLogin = useCallback(() => {
    props.handleLogin(
      inputAccountEl.current.value,
      inputPasswordEl.current.value
    )
  }, [props])

  const { loginStatus } = props
  if (!loginStatus) {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' ref={inputAccountEl} />
          <Input placeholder='密码' type='password' ref={inputPasswordEl} />
          <Button onClick={onLogin}>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    )
  } else {
    return <Redirect to='/' />
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin(account, password) {
      dispatch(login(account, password))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
