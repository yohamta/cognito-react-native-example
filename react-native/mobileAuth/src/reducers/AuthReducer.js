import { SIGNIN_SUCCESS, SIGNIN_FAIL } from '../actions/types';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
