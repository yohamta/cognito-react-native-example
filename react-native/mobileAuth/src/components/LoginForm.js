import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
                <Item stackedLabel style={styles.inputItemStyle}>
                  <Label style={styles.labelStyle}>Username</Label>
                  <Input />
                </Item>
                <Item stackedLabel style={styles.inputItemStyle}>
                  <Label style={styles.labelStyle}>Password</Label>
                  <Input secureTextEntry />
                </Item>
              </Form>
              <Button block style={styles.signinButtonStyle}>
                <Text style={styles.singinButtonLabelStyle}>Sign in</Text>
              </Button>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Label style={styles.noticeLabelStyle}>
                Do you have no Account ?
              </Label>
              <Button bordered style={styles.singupButtonStyle}>
                <Text style={styles.singupButtonLabelStyle}>Sign up</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const colors = {
  gray: '#ABB8C3',
  vivid: '#E91E63',
};

const styles = StyleSheet.create({
  noticeLabelStyle: {
    color: colors.gray,
    marginBottom: 10,
  },
  labelStyle: {
    color: colors.gray,
  },
  inputItemStyle: {
    borderBottomColor: colors.vivid,
  },
  signinButtonStyle: {
    marginTop: 10,
    backgroundColor: colors.vivid,
  },
  signinButtonLabelStyle: {
    color: 'white',
  },
  singupButtonStyle: {
    borderColor: colors.vivid,
    marginTop: 10,
  },
  singupButtonLabelStyle: {
    color: colors.vivid,
  },
});

export default LoginForm;
