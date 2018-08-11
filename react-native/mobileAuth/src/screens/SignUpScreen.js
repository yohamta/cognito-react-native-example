import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { reduxForm, Field, SubmissionError } from 'redux-form';
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
import { connect } from 'react-redux';
import { signUp } from '../actions';
import { validateEmail } from '../utils/Validator';

const validate = values => {
  const error = {};
  error.username = '';
  error.email = '';
  error.password = '';
  var un = values.username;
  var em = values.email;
  var pw = values.password;
  var pwc = values.passwordConfirm;
  if (values.username === undefined) {
    un = '';
  }
  if (values.email === undefined) {
    em = '';
  }
  if (values.password === undefined) {
    pw = '';
  }
  if (values.passwordConfirm === undefined) {
    pwc = '';
  }
  if (un.length > 15 && pw !== '') {
    error.password = 'Username must be less than 15 char';
  }
  if (pw.length < 8 && pw !== '') {
    error.password = 'Password is too short';
  }
  if (pw !== pwc) {
    error.passwordConfirm = 'Password is not matched';
  }
  if (em !== '' && validateEmail(em) === false) {
    error.email = 'Email format is invalid!';
  }
  return error;
};

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the App!',
  };
  onSubmit(values) {
    if (values.username === undefined || values.username === '') {
      throw new SubmissionError({
        email: 'Please Input Username',
        _error: 'Sign up Failed !',
      });
    }
    if (values.email === undefined || values.email === '') {
      throw new SubmissionError({
        email: 'Please Input E-mail Address',
        _error: 'Sign up Failed !',
      });
    }
    if (values.password === undefined || values.password === '') {
      throw new SubmissionError({
        username: 'Please Input Password',
        _error: 'Sign up Failed !',
      });
    }
    this.props.signUp(values);
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

  renderError(error) {
    if (error === undefined || error === null || error === '') {
      return <View />;
    }
    return <Text style={{ color: 'red' }}>{error}</Text>;
  }

  render() {
    const { error, signupError, handleSubmit } = this.props;
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Left>
              <Body>
                <Transition shared="authTitle">
                  <View>
                    <Text>Welcome,</Text>
                    <Text note>Please Sign in to continue</Text>
                  </View>
                </Transition>
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
                  name={'email'}
                  component={this.renderInput}
                  label="E-mail"
                />
                <Field
                  name={'password'}
                  component={this.renderInput}
                  label="Password"
                  secureTextEntry
                />
                <Field
                  name={'passwordConfirm'}
                  component={this.renderInput}
                  label="Password Comfirm"
                  secureTextEntry
                />
              </Form>
              <Transition shared="authSubmitButton">
                <View>
                  <Button
                    block
                    style={styles.signinButtonStyle}
                    onPress={handleSubmit(this.onSubmit.bind(this))}
                  >
                    <Text style={styles.singinButtonLabelStyle}>Sign up</Text>
                  </Button>
                </View>
              </Transition>
              {this.renderError(error)}
              {this.renderError(signupError)}
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Transition shared="MethodChange">
                <View>
                  <Label style={styles.noticeLabelStyle}>
                    Do you have no Account ?
                  </Label>
                  <Button
                    bordered
                    style={styles.singupButtonStyle}
                    onPress={() => {
                      this.props.navigation.navigate('SignIn');
                    }}
                  >
                    <Text style={styles.singupButtonLabelStyle}>Sign in</Text>
                  </Button>
                </View>
              </Transition>
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

const mapStateToProps = state => ({
  user: state.auth.user,
  signupError: state.auth.signupError,
});

const connected = connect(
  mapStateToProps,
  { signUp }
)(SignUpScreen);
export default reduxForm({ form: 'signin', validate })(connected);
