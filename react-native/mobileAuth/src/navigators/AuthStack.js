import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {Animated, Easing} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

const fluidNav = FluidNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
  }
);

export default createStackNavigator(
  {
    fluidNav,
  },
  {
    navigationOptions: _ => ({
      title: 'Welcome',
    }),
  }
);
