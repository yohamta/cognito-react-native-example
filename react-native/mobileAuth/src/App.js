/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Header, Title, Container, Content } from 'native-base';
import LoginForm from './components/LoginForm';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Title>Mobile Auth</Title>
        </Header>
        <Content>
          <LoginForm />
        </Content>
      </Container>
    );
  }
}
