import { createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: { screen: AuthStack },
    MainStack: { screen: MainStack },
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default SwitchNavigator;
