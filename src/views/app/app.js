import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppNavigator from './appNavigator';

export default class BanBook extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('BanBook', () => BanBook);
