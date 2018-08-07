import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
