import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_CONFIRM,
  SIGNUP_CONFIRM_SUCCESS,
  SIGNUP_CONFIRM_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  RESEND_CODE,
  RESEND_CODE_SUCCESS,
  RESEND_CODE_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  signupError: null,
  confirmError: null,
  resendSuccess: false,
  resendError: null,
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
        signupError: action.payload.message,
      };
    case SIGNUP_CONFIRM:
      return {
        ...state,
        confirmError: null,
      };
    case SIGNUP_CONFIRM_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNUP_CONFIRM_FAIL:
      return {
        ...state,
        confirmError: action.payload.message,
      };
    case RESEND_CODE:
      return {
        ...state,
        resendError: null,
        resendSuccess: false,
      };
    case RESEND_CODE_SUCCESS:
      return {
        ...state,
        resendError: null,
        resendSuccess: true,
      };
    case RESEND_CODE_FAIL:
      return {
        ...state,
        resendError: action.payload.message,
        resendSuccess: false,
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
