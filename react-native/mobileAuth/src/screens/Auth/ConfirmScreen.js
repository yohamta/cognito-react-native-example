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
import { confirm, resend } from '../../actions';

class ConfirmScreen extends Component {
  onSubmit(values) {
    if (values.verifyCode === undefined || values.verifyCode === '') {
      throw new SubmissionError({
        email: 'Please Input Verification Code !',
        _error: 'Confirm Failed !',
      });
    }
    this.props.confirm(values);
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
    const { error, confirmError, handleSubmit } = this.props;
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Left>
              <Body>
                <View>
                  <Text>Please input verification code</Text>
                </View>
              </Body>
            </Left>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Form style={{ alignSelf: 'stretch' }}>
                <Field
                  name={'verifyCode'}
                  component={this.renderInput}
                  label="Verify Code"
                />
              </Form>
              <Transition shared="authSubmitButton">
                <View>
                  <Button
                    block
                    style={styles.signinButtonStyle}
                    onPress={handleSubmit(this.onSubmit.bind(this))}
                  >
                    <Text style={styles.singinButtonLabelStyle}>Confirm</Text>
                  </Button>
                </View>
              </Transition>
              {this.renderError(error)}
              {this.renderError(confirmError)}
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Transition shared="MethodChange">
                <View>
                  <Label style={styles.noticeLabelStyle}>
                    Have you not received E-mail?
                  </Label>
                  <Button
                    bordered
                    style={styles.singupButtonStyle}
                    onPress={() => {
                      this.props.resend();
                    }}
                  >
                    <Text style={styles.singupButtonLabelStyle}>Resend E-mail</Text>
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
  confirmError: state.auth.confirmError,
});

const connected = connect(
  mapStateToProps,
  { confirm }
)(ConfirmScreen);
export default reduxForm({ form: 'confirm' })(connected);
