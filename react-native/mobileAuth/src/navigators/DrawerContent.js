import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { signOut } from '../actions';
import Icon from 'react-native-vector-icons/Octicons';

class DrawerContent extends Component {
  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigate);
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollView>
          <TouchableOpacity
            key="signout"
            onPress={() => {
              this.props.signOut(this.props.navigation);
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="sign-in" // FIXME: this is octicon's bug
                size={20}
                color="white"
                style={{ margin: 15, width: 20 }}
              />
              <Text style={{ color: 'white', marginTop: 17 }}>Sign Out</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            key="changePassword"
            onPress={() => {
              this.props.navigation.navigate('ChangePassword');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="kebab-vertical" // FIXME: this is octicon's bug
                size={20}
                color="white"
                style={{ margin: 15, width: 20 }}
              />
              <Text style={{ color: 'white', marginTop: 17 }}>Change Password</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#444',
  },
};

const mapStateToProps = state => ({
  signOutError: state.auth.signOutError,
});

import { connect } from 'react-redux';
export default connect(
  mapStateToProps,
  { signOut }
)(DrawerContent);
