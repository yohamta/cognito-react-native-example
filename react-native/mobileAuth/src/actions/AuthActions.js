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
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from './types';

const getUserSession = () => {
  Auth.currentSession()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

const _signIn = (username, password, navigation, dispatch) => {
  dispatch({
    type: SIGNIN,
    payload: {
      username,
      password,
    },
  });
  Auth.signInWithPassword(username, password)
    .then(user => {
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: user,
      });
      navigation.navigate('Home');
    })
    .catch(err => {
      dispatch({
        type: SIGNIN_FAIL,
        payload: err,
      });
      if (err.code === 'UserNotConfirmedException') {
        navigation.navigate('Confirm');
      }
    });
}

export const signIn = ({ username, password }, navigation) => dispatch => {
  _signIn(username, password, navigation, dispatch);
};

export const confirm = ({ username, verifyCode }, password, navigation) => dispatch => {
  dispatch({
    type: SIGNUP_CONFIRM,
    payload: {
      username,
    },
  });
  Auth.confirmSignUp(username, verifyCode, {
    forceAliasCreation: true,
  })
    .then(data => {
      dispatch({
        type: SIGNUP_CONFIRM_SUCCESS,
        payload: data,
      });
      navigation.navigate('SignIn');
      _signIn(username, password, navigation, dispatch);
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
    payload: {
      username,
      email,
      password,
    },
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
