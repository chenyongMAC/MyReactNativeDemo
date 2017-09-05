import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  Image,
  Easing,
} from 'react-native';

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

class FadeInView extends Component {
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 3500
      }
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          opacity: this.state.fadeAnim
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

class MyAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      anim: new Animated.Value(0),
      compositeAnim: new Animated.Value(0)
    };
  }
  render() {
    return (
      <View style={{margin:20}}>
        <Text style={styles.welcome}>
          Animated使用实例
        </Text>
        <CustomButton
          text="动画:试图淡入效果"
          onPress={() => {
            this.setState((state) => (
              {show: !state.show}
            ));
          }}
        />
        {this.state.show && <FadeInView>
          <View style={styles.content}>
            <Image
              source={require('../imgs/logo.jpg')}
              style={{width:50, height:50}}
            />
          </View>
        </FadeInView>}

        <CustomButton
          text="动画:加入插值效果"
          onPress={() => {
            Animated.spring(this.state.anim,
              {
                toValue:0,
                velocity:7,
                tension:-20,
                friction:3
              }).start();
          }}
        />
        <Animated.View
          style={[styles.content, {
            transform: [
              {scale: this.state.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 3],
              })},
              {translateX: this.state.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 300],
              })},
              {rotate: this.state.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  '0deg', '90deg'
                ],
              })},
            ]}
          ]}>
          <Image
            source={require('../imgs/logo.jpg')}
            style={{width:50,height:50}}
          />
        </Animated.View>
        <CustomButton
          text="动画:组合动画效果"
          onPress={()=>{
            Animated.sequence([
              Animated.timing(this.state.compositeAnim, {
                toValue: 100,
                easing: Easing.linear,
              }),
              Animated.delay(200),
              Animated.timing(this.state.compositeAnim, {
                toValue: 0,
                easing: Easing.elastic(2),
              }),
              Animated.delay(100),
              Animated.timing(this.state.compositeAnim, {
                toValue: 50,
                easing: Easing.linear,
              }),
              Animated.timing(this.state.compositeAnim, {
                toValue: 0,
                easing: Easing.elastic(1),
              })
            ]).start();
          }}
        />
        <Animated.View
          style={[styles.content, {
            bottom:this.state.compositeAnim
          }]}>
          <Image source={require('../imgs/logo.jpg')} style={{width:50,height:50}}/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  content: {
    backgroundColor: 'green',
    borderWidth: 1,
    padding: 5,
    margin: 20,
    alignItems: 'center',
  },
});