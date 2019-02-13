import {fromJS} from 'immutable';
import {constants} from '../store';

const defaultStore =fromJS({
  userInfo: null,
  commonFuncList: [],
  activityList: [],
  resourceStrictList: [],
  planAndDispatchList: [],
  globalMonitorList: []
}) ;

export default (state = defaultStore, action) => {
  switch (action.type) {
    case constants.SET_HOME_DATA:
      return state.merge({
        activityList: action.activityList,
        commonFuncList: action.commonFuncList,
        resourceStrictList: action.resourceStrictList,
        userInfo: action.userInfo,
        planAndDispatchList: action.planAndDispatch,
        globalMonitorList: action.globalMonitor,
      });
    default:
      return state;
  }
}