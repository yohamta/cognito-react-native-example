import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Button } from 'native-base';
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
          <TouchableOpacity key="signout">
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

export default DrawerContent;
