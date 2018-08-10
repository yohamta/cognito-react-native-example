import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('userToken');
    //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    const userToken = null;
    this.props.navigation.navigate(userToken ? 'App' : 'AuthStack');
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ActivityIndicator style={{ alignSelf: 'center' }} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
