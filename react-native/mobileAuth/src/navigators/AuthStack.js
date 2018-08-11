import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ConfirmScreen from '../screens/Auth/ConfirmScreen';
import { createStackNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

const fluidNav = FluidNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    Confirm: { screen: ConfirmScreen },
  }
);

export default createStackNavigator(
  {
    fluidNav,
  },
  {
    navigationOptions: _ => ({
      title: 'Welcome to the app',
    }),
  }
);
