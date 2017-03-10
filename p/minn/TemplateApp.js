/**
* @auth:minn
* @qq:394286006
*/
import React,{Component} from 'react';
import {
  Navigator,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';
import MainConstant from './utils/MainConstant';
import Wellcome from './Wellcome';
import NavBar from './NavBar';
import MinnUtil from './utils/MinnUtil';
 class TemplateApp extends Component{
   constructor(props,styles){
     super(props);
     this.styles=styles;
     this.minnUtil=MinnUtil.getInstance(window);
     let params=this.minnUtil.getUserInfo();
     let titleBack=this.minnUtil.get('title_back');
     this.defaultRoute = {
      title:this.minnUtil.get('pagebar_firstpage'),
      component: Wellcome,
      rightButton:true,
      params:params
    };
   }
   renderScene(route, navigator) {
     let Component = route.component;
     return (
       <Component {...route.params} navigator={navigator} onForward={ (title,component) => {
              navigator.push({
                title: title,
                component: component,
              });
            }}/>
     );
   }

   render(){
     return(<Navigator
       initialRoute={this.defaultRoute}
       renderScene={this.renderScene}
       sceneStyle={{paddingTop:74}}
       navigationBar={NavBar.render(this.minnUtil,this.styles)} />);
   }
}

export default  TemplateApp;
