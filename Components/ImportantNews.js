import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ImportantNews extends Component {
  constructor(props) {
    super(props);
  }
  show (title) {
    alert(title);
  }
  render () {
    let news = [];
    for (const i in this.props.news) {
      const text = (
        <Text
          onPress = {this.show.bind(this, this.props.news[i])}
          numberOfLines={2}
          style={styles.news_item}>
          {this.props.news[i]}
        </Text>
      );
      news.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex:1
  },
  list_item: {
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center'
  },
  list_item_font: {
    fontSize:16
  },
  news_title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#CD1D1C',
    marginLeft:10,
    marginTop:15
  },
  news_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:20
  }
});