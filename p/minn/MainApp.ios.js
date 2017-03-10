/**
* @auth:minn
* @qq:394286006
*/
import {StyleSheet} from 'react-native';
import TemplateApp from './TemplateApp';
 class MainApp extends TemplateApp{
   constructor(props){
     super(props,styles);
   }
}

const styles = StyleSheet.create({
  title: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  button: {
    flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18, color: '#FFFFFF', fontWeight: '400'
  },icon: {
    width: 40,
    height: 40,
    margin:2
  },
  navBar:{
    alignItems: 'center',
    backgroundColor: '#40877F',
    shadowOffset:{
        width: 1,
        height: 0.5,
    },
    shadowColor: '#4087F0',
    shadowOpacity: 0.8,
    }
});
export default MainApp;
