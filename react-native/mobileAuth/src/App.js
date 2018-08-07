/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  YellowBox,
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';
import { Header, Title, Container, Content } from 'native-base';
import {
  createSwitchNavigator,
  createStackNavigator,
  CardStackStyleInterpolator,
} from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import reducers from './reducers';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import aws_exports from './aws-exports';

YellowBox.ignoreWarnings(['Remote debugger', 'Setting a timer']);

Amplify.configure(aws_exports);
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 200,
      easing: Easing.linear,
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1],
      });
      return { opacity };
    },
  };
};

const AuthStack = createStackNavigator(
  { SignIn: SignInScreen, SignUp: SignUpScreen },
  {
    transitionConfig,
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Container styles={{ backgroundColor: 'gray' }}>
          <SwitchNavigator />
        </Container>
      </Provider>
    );
  }
}
