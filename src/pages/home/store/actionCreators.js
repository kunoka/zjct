import axios from 'axios';
import {constants} from '../store';

const setHomeData = (result) => {
  const action = {
    type: constants.SET_HOME_DATA,
    userInfo: result.userInfo,
    commonFuncList: result.commonFuncList,
    activityList: result.activityList,
    resourceStrictList: result.resourceStrictList,
    planAndDispatch: result.planAndDispatch,
    globalMonitor: result.globalMonitor
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