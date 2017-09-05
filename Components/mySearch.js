import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  PixelRatio,
} from 'react-native';

let onePT = 1/PixelRatio.get();

class Search extends  Component {
  constructor (props) {
    super(props);
    this.state = {show: false};
  }
  getValue (text) {
    let value = text;
    this.setState({
      show: true,
      value: value
    });
  }
  hide (val) {
    this.setState({
      show: false,
      value: val
    });
  }
  render () {
    return (
      <View style={styles.flex}>
        <View style={[styles.textInputHeight, styles.flexDirection]}>
          <View style={styles.flex}>
            <TextInput
              style={styles.input}
              returnKeyType="search"
              placeholder="请输入关键字"
              onEndEditing={this.hide.bind(this, this.state.value)}
              value={this.state.value}
              onChangeText={text => this.getValue(text)}
            />
          </View>
          <View style={styles.btn}>
            <Text style={styles.search} onPress={this.hide.bind(this, this.state.value)}>
              搜索
            </Text>
          </View>
        </View>
        {this.state.show ?
          <View style={styles.result}>
            <Text
              onPress={this.hide.bind(this, this.state.value + '庄')}
              style={styles.item}
              numberOfLines={1}>
              {this.state.value}+HelloWorld
            </Text>
          </View>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex:1
  },
  flexDirection: {
    flexDirection:'row'
  },
  topStatus: {
    marginTop:25
  },
  input: {
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:'#ccc',
    borderRadius:4
  },
  btn: {
    width:55,
    height:45,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    justifyContent:'center',
    alignItems:'center'
  },
  search: {
    color: '#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  result: {
    marginTop:onePT,
    marginLeft:5,
    marginRight:5,
    height:200,
    borderColor:'#ccc',
    borderTopWidth:onePT
  },
  item: {
    fontSize:16,
    padding:5,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:onePT,
    borderColor:'#ddd',
    borderTopWidth:0,
  }
});

// class HelloWorld extends  Component {
//   render () {
//     return (
//       <View style={[styles.flex, styles.topStatus]}>
//         <Search />
//       </View>
//     );
//   }
// }
