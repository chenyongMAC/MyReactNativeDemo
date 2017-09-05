import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {NativeModules} from 'react-native';
import {NativeAppEventEmitter} from  'react-native';

var subscription;
var CalendarManager = NativeModules.CalendarManager;
class CustomButton extends Component {
  render () {
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

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin:10
  },
  button: {
    margin:5,
    backgroundColor:'white',
    padding:10,
    borderWidth:1,
    borderColor:'#cdcdcd'
  }
});

// class HelloWorld extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       events:'',
//       notice:'',
//     }
//   }
//   componentDidMount(){
//     console.log('开始订阅通知...');
//     subscription = NativeAppEventEmitter.addListener(
//       'EventReminder',
//       (reminder) => console.log('通知信息:'+reminder.name)
//     );
//   }
//   componentWillUnmount(){
//     subscription.remove();
//   }
//   async _updateEvents(){
//     try{
//       var events=await CalendarManager.findEventsPromise();
//       this.setState({events});
//     }catch(e){
//       console.error(e);
//     }
//   }
//   render () {
//     return (
//       <View style={{marginTop:20}}>
//         <Text style={styles.welcome}>
//           封装iOS原生模块实例
//         </Text>
//         <CustomButton text="点击调用原生模块addEvent方法"
//                       onPress={()=>CalendarManager.addEvent('生日聚会', '江苏南通 中天路')}
//         />
//         <CustomButton text="点击调用原生模块addEventMoreDate方法"
//                       onPress={()=>CalendarManager.addEventMoreDate('生日聚会', '江苏南通 中天路',1463987752)}
//         />
//         <CustomButton text="调用原生模块addEventMoreDetails方法-传入字段格式"
//                       onPress={()=>CalendarManager.addEventMoreDetails('生日聚会', {
//                         location:'江苏 南通市 中天路',
//                         time:1463987752,
//                         description:'请一定准时来哦~'
//                       })}
//         />
//         <Text style={{marginLeft:5}}>
//           'Callback的返回数据为:'+{this.state.events}
//         </Text>
//         <CustomButton text="点击调用原生模块findEvents方法-Callback"
//                       onPress={()=>CalendarManager.findEvents((error,events)=>{
//                           if(error){
//                             console.error(error);
//                           }else{
//                             this.setState({events:events,});
//                           }
//                         }
//                       )}
//         />
//         <CustomButton text="点击调用原生模块findEventsPromise方法-Promise"
//                       onPress={()=>CalendarManager.findEvents((error,events)=>{
//                           if(error){
//                             console.error(error);
//                           }else{
//                             this.setState({events:events,});
//                           }
//                         }
//                       )}
//         />
//         <Text style={{marginLeft:5}}>
//           '静态数据为:'+{CalendarManager.firstDayOfTheWeek}
//         </Text>
//         <Text style={{marginLeft:5}}>
//           '发送通知信息:'+{this.state.notice}
//         </Text>
//         <CustomButton text="点击调用原生模块sendNotification方法"
//                       onPress={()=>CalendarManager.sendNotification('准备发送通知...')}
//         />
//       </View>
//     );
//   }
// }
