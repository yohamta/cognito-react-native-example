import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNIN_SUCCESS, SIGNIN_FAIL } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  signupError: null,
  confirmError: null,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signupError: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signupError: action.payload,
      };
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
