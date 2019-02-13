import {fromJS} from 'immutable';
import {constants} from '../store';

const defaultStore =fromJS({
  commonFuncList: [],
  activityList: []
}) ;

export default (state = defaultStore, action) => {
  switch (action.type) {
    case constants.SET_HOME_DATA:
      console.log('action');
      console.log(action);
      return state.merge({
        activityList: action.activityList,
        commonFuncList: action.commonFuncList
      });
    default:
      return state;
  }
}