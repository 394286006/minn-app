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
class NavBar {
   static  render(minnUtil,styles){
    let titleBack=minnUtil.get('title_back');
    let routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if(index > 0) {
          return (
            <TouchableOpacity
              onPress={() =>navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>{titleBack}</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <Image  style={styles.icon} source={{uri:MainConstant.url+MainConstant.app+'/assets/394286006.png'}} />
          );
        }
      },
      RightButton(route, navigator, index, navState) {
        if(index === 0 ) {
          return (
            <TouchableOpacity
              onPress={() => {
                   Alert.alert(minnUtil.get('title_userinfo'),minnUtil.get('login_name')+':'+route.params.username,[{text:minnUtil.get('main_alert_oklabel')}]);
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>{route.params.username}</Text>
            </TouchableOpacity>
          );
        } else {
          return null;
        }

      },
      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title}</Text>
          </View>
        );
      }
    };

    return(
      <Navigator.NavigationBar
        style={styles.navBar}
        routeMapper={routeMapper}
      />
    );
  }
}

export default NavBar;
