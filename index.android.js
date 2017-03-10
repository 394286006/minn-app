/**
* @auth:minn
* @qq:394286006
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Modal,
  Alert,
  DeviceEventEmitter
} from 'react-native';
import MinnUtil from './p/minn/utils/MinnUtil';
import AppStore from './p/minn/stores/AppStore';
import UserLogin from './p/minn/security/UserLogin.android';
import MainApp from './p/minn/MainApp.android';
export default class minnApp extends Component {

  constructor(props) {
      super(props);
      this.state = {modalVisible: false,loginStatus:'login'};
      AppStore.init();
      AppStore.getInstance().getResource(this.localCallback,this);
    }

    setModalVisible(visible) {
       this.setState({modalVisible: visible});
     }

  localCallback(messageResource){

      if(messageResource.isLoaded()){
           window.GLOBAL.global=AppStore.getInstance().getGlobal(messageResource);
           messageResource.app.setState({loginStatus:'logining'});
       }else{
            console.log('local resource load error!');
       }
 }

   componentDidMount() {
   }

   componentWillUnmount() {
   }

   loginStatus(status){
     this.setState({loginStatus:status});
     console.log('hide');
   }

  render() {
    return (
       (this.state.loginStatus === 'logined' )?
         (<MainApp/>) :
         ((this.state.loginStatus === 'logining')?
           (<View style={{marginTop: 22}}>
           <UserLogin parentView={this}/>
          </View>):null)

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card: {
    width:200,
  },
  face: {
    flex:1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex:1,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 30,
    marginTop: 30,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    height: 64
  }
});

AppRegistry.registerComponent('minnApp', () => minnApp);
