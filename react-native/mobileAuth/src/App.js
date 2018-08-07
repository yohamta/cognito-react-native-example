/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { YellowBox, Platform, StyleSheet, Text, View } from 'react-native';
import { Header, Title, Container, Content } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import aws_exports from './aws-exports';

YellowBox.ignoreWarnings(['Remote debugger', 'Setting a timer']);

Amplify.configure(aws_exports);
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header>
            <Title>Mobile Auth</Title>
          </Header>
          <Content>
            <LoginForm />
          </Content>
        </Container>
      </Provider>
    );
  }
}
