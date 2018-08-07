import React, { Component } from 'react';
import { Header, Title, Container, Content } from 'native-base';
import { SharedElementRenderer } from 'react-native-motion';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

export default class AuthScreen extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container styles={{ backgroundColor: 'gray' }}>
          <SharedElementRenderer>
            <SwitchNavigator />
          </SharedElementRenderer>
        </Container>
      </Provider>
    );
  }
}
