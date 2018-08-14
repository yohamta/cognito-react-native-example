import React, { Component } from 'react';
import { View } from 'react-native';
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
  Spinner,
} from 'native-base';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import styles from './styles';

class SignInScreen extends Component {
  onSubmit(values) {
    console.log({ values });
    if (values.username === undefined || values.username === '') {
      throw new SubmissionError({
        username: 'Please Input Username or E-mail Address',
        _error: 'Sign in Failed !',
      });
    }
    if (values.password === undefined || values.password === '') {
      throw new SubmissionError({
        password: 'Please Input Password',
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

  renderSubmitButton() {
    const { handleSubmit } = this.props;
    if (this.props.loading) {
      return (
        <Button
          block
          style={[styles.signinButtonStyle, { backgroundColor: 'orange' }]}
        >
          <Spinner color="white" size="small" />
        </Button>
      );
    }
    return (
      <Button
        block
        style={styles.signinButtonStyle}
        onPress={handleSubmit(this.onSubmit.bind(this))}
      >
        <Text style={styles.singinButtonLabelStyle}>Sign in</Text>
      </Button>
    );
  }

  render() {
    const { error, signInError } = this.props;
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
                <View>{this.renderSubmitButton()}</View>
              </Transition>
              {this.renderError(error)}
              {this.renderError(signInError)}
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Label style={styles.noticeLabelStyle}>
                Do you have no Account ?
              </Label>
              <Transition shared="MethodChange">
                <View>
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

const mapStateToProps = state => ({
  user: state.auth.user,
  signInError: state.auth.signInError,
  username: state.auth.username,
  password: state.auth.password,
  loading: state.auth.loading,
});

const connected = connect(
  mapStateToProps,
  { signIn }
)(SignInScreen);
export default reduxForm({ form: 'signIn' })(connected);
