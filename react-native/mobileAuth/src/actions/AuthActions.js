import { Auth } from 'aws-amplify';
import { SIGNIN_SUCCESS } from './types';

export const signIn = (email, password) => {
  Auth.signInWithPassword(email, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));
};

export const signUp = (username, email, password) => {
  Auth.signUp({
    username,
    password,
    attributes: {
      email,
    },
  })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
};
