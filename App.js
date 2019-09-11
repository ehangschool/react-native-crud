/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Fragment, 
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

import {
  StackNavigator,
  createAppContainer
} from 'react-navigation';

import {
  createStackNavigator
} from 'react-navigation-stack'

import Routes from './src/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  }
});
