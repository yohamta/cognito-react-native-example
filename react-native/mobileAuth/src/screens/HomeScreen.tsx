import React from 'react';
import { Component } from 'react';
import { Animated, Text } from 'react-native';
import { Container, Content } from 'native-base';

export default class HomeScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    console.log("componentDidMount");
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start();
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={{ textAlign: 'center' }}>This is Home Screen</Text>
          </Animated.View>
        </Content>
      </Container>
    );
  }
}
