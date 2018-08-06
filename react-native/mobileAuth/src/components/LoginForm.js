import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Body,
  Form,
  Item,
  Input,
  Label,
  Button,
  Left,
  Text,
} from 'native-base';

class LoginForm extends Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Left>
              <Body>
                <Text>Welcome,</Text>
                <Text note>Please Sign in to continue</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Form style={{ alignSelf: 'stretch' }}>
                <Item stackedLabel style={{ borderBottomColor: '#E91E63' }}>
                  <Label style={{ color: '#ABB8C3' }}>Username</Label>
                  <Input />
                </Item>
                <Item stackedLabel style={{ borderBottomColor: '#E91E63' }}>
                  <Label style={{ color: '#ABB8C3' }}>Password</Label>
                  <Input secureTextEntry />
                </Item>
              </Form>
              <Button transparent style={{ marginTop: 10 }}>
                <Text style={{ color: '#E91E63' }}>Sign in</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default LoginForm;
