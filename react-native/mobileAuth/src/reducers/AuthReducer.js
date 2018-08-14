import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_CONFIRM,
  SIGNUP_CONFIRM_SUCCESS,
  SIGNUP_CONFIRM_FAIL,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  RESEND_CODE,
  RESEND_CODE_SUCCESS,
  RESEND_CODE_FAIL,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  signInError: null,
  signUpError: null,
  confirmError: null,
  signOutError: null,
  resendSuccess: false,
  resendError: null,
  username: null,
  email: null,
  password: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log({action, state});
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        ...action.payload,
        signInError: null,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        signInError: action.payload.message,
        loading: false,
      };
    case SIGNUP:
      return {
        ...state,
        ...action.payload,
        signUpError: null,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signUpError: action.payload.message,
        loading: false,
      };
    case SIGNUP_CONFIRM:
      return {
        ...state,
        ...action.payload,
        confirmError: null,
        loading: true,
      };
    case SIGNUP_CONFIRM_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SIGNUP_CONFIRM_FAIL:
      return {
        ...state,
        confirmError: action.payload.message,
        loading: false,
      };
    case RESEND_CODE:
      return {
        ...state,
        resendError: null,
        resendSuccess: false,
        loading: true,
      };
    case RESEND_CODE_SUCCESS:
      return {
        ...state,
        resendError: null,
        resendSuccess: true,
        loading: false,
      };
    case RESEND_CODE_FAIL:
      return {
        ...state,
        resendError: action.payload.message,
        resendSuccess: false,
        loading: false,
      };
    case SIGNOUT:
      return {
        ...state,
        signOutError: null,
        loading: true,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case SIGNOUT_FAIL:
      return {
        ...state,
        signOutError: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
