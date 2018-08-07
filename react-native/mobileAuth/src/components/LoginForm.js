import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { reduxForm, Field } from 'redux-form';
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

const validate = values => {
  const error = {};
  error.username = '';
  error.password = '';
  var un = values.username;
  var pw = values.password;
  if (values.username === undefined) {
    un = '';
  }
  if (values.password === undefined) {
    pw = '';
  }
  if (pw.length < 8 && pw !== '') {
    error.password = 'Password is too short';
  }
  if (un.length > 15) {
    error.username = 'Username is too long (max 15 characters)';
  }
  return error;
};

class LoginForm extends Component {
  onSubmit(values) {
    console.log(values);
  }

  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    ...inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <React.Fragment>
        <Item stackedLabel style={styles.inputItemStyle} error={hasError}>
          <Label style={styles.labelStyle}>{label}</Label>
          <Input {...input} {...inputProps} />
        </Item>
        {hasError ? <Text style={{ color: 'red' }}>{error}</Text> : <Text />}
      </React.Fragment>
    );
  }

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
                <Field
                  name={'username'}
                  component={this.renderInput}
                  label="Username"
                />
                <Field
                  name={'password'}
                  component={this.renderInput}
                  label="Password"
                  secureTextEntry
                />
              </Form>
              <Button
                block
                style={styles.signinButtonStyle}
                onPress={this.props.handleSubmit(this.onSubmit)}
              >
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

export default reduxForm({ form: 'signin', validate })(LoginForm);
