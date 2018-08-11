import { Auth } from 'aws-amplify';
import { SIGNIN_SUCCESS, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL } from './types';

export const signIn = (email, password) => {
  Auth.signInWithPassword(email, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));
};

export const signUp = ({ username, email, password }) => dispatch => {
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
      console.log(user);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: user,
      });
    })
    .catch(err => {
      console.log(user);
      dispatch({
        type: SIGNUP_FAIL,
        payload: err,
      });
    });
};
