import {fromJS} from 'immutable';
import {constatns} from './index';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action)=> {
  switch (action.type) {
    case constatns.CHANGE_LOGIN:
      return state.set('login', action.value);
    default:
      return state;
  }
}