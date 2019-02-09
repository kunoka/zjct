import {fromJS} from 'immutable';

const defaultStore = {

}

export default (state = defaultStore, action) => {
  switch (action.type) {
    default:
      return state;
  }
}