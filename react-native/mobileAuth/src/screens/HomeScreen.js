import React, { Component } from 'react';
import { Animated, Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class HomeScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

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
