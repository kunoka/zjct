import axios from 'axios';
import {fromJS} from 'immutable';
import {constants} from '../store';

const setHomeData = (result) => {
  const action = {
    type: constants.SET_HOME_DATA,
    commonFuncList: result.commonFuncList,
    activityList: result.activityList
  }
  return action;
}

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/CommonFunction.json').then((res) => {
      const result = res.data.data;
      const action = setHomeData(result);
      dispatch(action);
    })
  }
}