import React, { Component } from 'react';
import {StackNavigator} from "react-navigation";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class  HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'Chenyong'})}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends  Component {
  static navigationOptions = ({navigation}) => ({
      title: `Chat With ${navigation.state.params.user}`,
    }
  );
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

// const HelloWorld = StackNavigator({
//   Home: { screen: HomeScreen },
//   Chat: { screen: ChatScreen },
// });
