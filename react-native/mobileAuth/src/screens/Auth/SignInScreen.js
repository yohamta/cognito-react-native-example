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
import { signIn } from '../../actions';

class SignInScreen extends Component {
  onSubmit(values) {
    if (values.email === undefined || values.email === '') {
      throw new SubmissionError({
        email: 'Please Input E-mail Address',
        _error: 'Sign in Failed !',
      });
    }
    if (values.password === undefined || values.password === '') {
      throw new SubmissionError({
        email: 'Please Input Password',
        _error: 'Sign in Failed !',
      });
    }
    signIn(values.email, values.password);
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
    const { error, handleSubmit } = this.props;
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
              </Form>
              <Transition shared="authSubmitButton" appear="scale">
                <View>
                  <Button
                    block
                    style={styles.signinButtonStyle}
                    onPress={handleSubmit(this.onSubmit)}
                  >
                    <Text style={styles.singinButtonLabelStyle}>Sign in</Text>
                  </Button>
                </View>
              </Transition>
              {error !== undefined &&
                error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}
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

export default reduxForm({ form: 'signin' })(SignInScreen);
