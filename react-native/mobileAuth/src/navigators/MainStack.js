import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from './DrawerContent';

const DrawerNavigation = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
  },
  {
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerWidth: 200,
  }
);

const MainStack = StackNavigator(
  {
    DrawerNavigation,
  },
  {
    navigationOptions: navigator => ({
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigator.navigation.toggleDrawer();
          }}
        >
          <Icon
            name="bars"
            size={20}
            color="#aaa"
            style={styles.headerLeftIconStyle}
          />
        </TouchableOpacity>
      ),
      headerTitle: (
        <View style={styles.searchInputContainer}>
          <Icon
            name="search"
            size={20}
            color="#aaa"
            style={styles.searchInputIconStyle}
          />
          <TextInput
            style={styles.searchInputStyle}
            underlineColorAndroid="transparent"
            placeholder="search"
          />
        </View>
      ),
      drawerLockMode: 'locked-open',
    }),
  }
);

const styles = StyleSheet.create({
  headerLeftIconStyle: {
    marginLeft: 15,
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  searchInputIconStyle: {
    padding: 5,
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: 'left',
  },
});

export default MainStack;
