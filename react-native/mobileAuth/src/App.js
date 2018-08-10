import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Amplify from 'aws-amplify';
import reducers from './reducers';
import aws_exports from './aws-exports';
import AppNavigator from './navigators/AppNavigator';

YellowBox.ignoreWarnings(['Remote debugger', 'Setting a timer']);

Amplify.configure(aws_exports);

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
