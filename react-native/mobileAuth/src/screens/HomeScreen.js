import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>This is Home Screen</Text>
        </Content>
      </Container>
    );
  }
}
