import { Auth } from 'aws-amplify';
import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_CONFIRM,
  SIGNUP_CONFIRM_SUCCESS,
  SIGNUP_CONFIRM_FAIL,
  RESEND_CODE,
  RESEND_CODE_SUCCESS,
  RESEND_CODE_FAIL,
} from './types';

export const signIn = (email, password) => {
  Auth.signInWithPassword(email, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));
};

export const confirm = ({ username, verifyCode }) => dispatch => {
  dispatch({
    type: SIGNUP_CONFIRM,
  });
  Auth.confirmSignUp(username, verifyCode, {
    forceAliasCreation: true,
  })
    .then(data => {
      dispatch({
        type: SIGNUP_CONFIRM_SUCCESS,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_CONFIRM_FAIL,
        payload: err,
      });
    });
};

export const resend = ({ username }) => dispatch => {
  dispatch({
    type: RESEND_CODE,
  });
  Auth.resendSignUp(username)
    .then(data => {
      dispatch({
        type: RESEND_CODE_SUCCESS,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: RESEND_CODE_FAIL,
        payload: err,
      });
    });
};

export const signUp = (
  { username, email, password },
  navigation
) => dispatch => {
  dispatch({
    type: SIGNUP,
  });
  Auth.signUp({
    username,
    password,
    attributes: {
      email,
    },
  })
    .then(user => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: user,
      });
      navigation.navigate('Confirm');
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: err,
      });
    });
};
