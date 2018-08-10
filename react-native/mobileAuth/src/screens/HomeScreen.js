import React, { Component } from 'react';
import { Text } from 'react-native';
import { Header, Title, Container, Content } from 'native-base';
import { SharedElementRenderer } from 'react-native-motion';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Hello</Text>
        </Content>
      </Container>
    );
  }
}
