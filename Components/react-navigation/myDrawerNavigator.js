import React, { Component } from 'react';
import {DrawerNavigator} from "react-navigation";
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
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  };

  render () {
    return (
      <Button
        onPress = { () => this.props.navigation.navigate('DrawerOpen')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends  Component {
  static navigationOptions = {
    drawerLabel:'Notifications',
    drawerIcon: ({tintColor}) => (
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

// const HelloWorld = DrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });