import React from 'react';
import { Auth } from 'aws-amplify';
import { View, Text } from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    try {
      const session = await Auth.currentSession();
      console.log(session);
      this.props.navigation.navigate(session !== null ? 'Main' : 'Auth');
    } catch (err) {
      console.log(err);
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Loading</Text>
      </View>
    );
  }
}

export default AuthLoadingScreen;
