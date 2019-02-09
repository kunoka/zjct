import React, {PureComponent} from 'react';
import { LoginWrapper, LoginBox, Input, Button} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent {
  render() {
    const {loginStatus, login} = this.props;
    return(
      !loginStatus ?
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="请输入用户名" ref={(input) => this.account = input}/>
          <Input placeholder="请输入密码" type="password" ref={(input) => this.password = input } />
          <Button onClick={() => login(this.account, this.password)}>登录</Button>
        </LoginBox>
      </LoginWrapper>
        :
        <Redirect to='/' />
    )
  }
}
const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    login(account, password) {
      dispatch(actionCreators.login(account.value, password.value));
    }
  }
}
export default connect(mapState, mapDispatch)(Login);