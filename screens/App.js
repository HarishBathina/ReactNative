/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import { Provider } from 'react-redux';
import store from '../index';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createTabNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





// type Props = {};
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View> */}
        <AppStackNavigator />
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  screen1: {
    screen: First
  },
  screen2: {
    screen: Second
  },
  screen3: {
    screen: Third
  },
}, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff'
      }
    }
  }
)

// export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#7fffd4',
  },
  instructions: {
    fontSize: 25,
    textAlign: 'center',
    color: '#7fffd4',
    marginBottom: 5,
  },
});
