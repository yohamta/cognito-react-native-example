import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Transition } from 'react-navigation-fluid-transitions';
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
import { signIn } from '../../actions';

class SignInScreen extends Component {
  onSubmit(values) {
    console.log({ values });
    if (values.username === undefined || values.username === '') {
      throw new SubmissionError({
        email: 'Please Input Username or E-mail Address',
        _error: 'Sign in Failed !',
      });
    }
    if (values.password === undefined || values.password === '') {
      throw new SubmissionError({
        email: 'Please Input Password',
        _error: 'Sign in Failed !',
      });
    }
    this.props.signIn(values, this.props.navigation);
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
    const { error, signInError, handleSubmit } = this.props;
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
                  name={'password'}
                  component={this.renderInput}
                  label="Password"
                  secureTextEntry
                />
              </Form>
              <Transition shared="authSubmitButton" appear="scale">
                <View>
                  <Button
                    block
                    style={styles.signinButtonStyle}
                    onPress={handleSubmit(this.onSubmit.bind(this))}
                  >
                    <Text style={styles.singinButtonLabelStyle}>Sign in</Text>
                  </Button>
                </View>
              </Transition>
              {this.renderError(error)}
              {this.renderError(signInError)}
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
                      this.props.navigation.navigate('SignUp');
                    }}
                  >
                    <Text style={styles.singupButtonLabelStyle}>Sign up</Text>
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
  signInError: state.auth.signInError,
  username: state.auth.username,
  password: state.auth.password,
});

const connected = connect(
  mapStateToProps,
  { signIn }
)(SignInScreen);
export default reduxForm({ form: 'signIn' })(connected);
