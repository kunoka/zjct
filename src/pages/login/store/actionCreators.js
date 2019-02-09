import axios from 'axios';
import {constatns} from './index';
import {fromJS} from 'immutable';
export const changeLogin = (data) => {
  return {
    type: constatns.CHANGE_LOGIN,
    value: fromJS(data)
  }
}
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('api/login.json?account='+ account + '&password=' + password).then((res) => {
      if(res){
        const result = res.data.data;
        dispatch(changeLogin(result));
      }else{
        alert('登录失败')
      }

    }).catch((err) => console.log(err))
  }
}