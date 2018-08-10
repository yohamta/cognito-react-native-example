import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';

const MainStack = StackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
  },
  {
    navigationOptions: navigator => ({
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
    }),
  }
);

const styles = StyleSheet.create({
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
