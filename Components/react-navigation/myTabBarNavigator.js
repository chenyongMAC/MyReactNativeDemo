import React, { Component } from 'react';
import {TabNavigator} from "react-navigation";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

class MyHomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render () {
    return (
      <Button
        onPress = { () => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends  Component {
  static navigationOptions = {
    tabBarLabel:'Notifications',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render () {
    return (
      <Button
        onPress = { () => this.props.navigation.goBack()}
        title="Go to notifications"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width:26,
    height:26,
  },
});

// const HelloWorld = TabNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// }, {
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//   },
// });