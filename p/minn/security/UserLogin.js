/**
* @auth:minn
* @qq:394286006
*/
import React,{Component} from 'react';
import {
    Navigator,
  NavigatorIOS,
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import PwdLogin from './PwdLogin';
import QRCodeLogin from './QRCodeLogin';
import MainConstant from '../utils/MainConstant';
import MinnUtil from '../utils/MinnUtil';
import UserAction from '../actions/UserAction';
import UserStore from '../stores/UserStore';
export default class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.parentView=props.parentView;
    this.userStore=new UserStore(this,this.minnUtil);
    this.userAction=new UserAction(this.userStore);
    this.minnUtil=MinnUtil.getInstance(window);
    this.state={loginType:'pwd'};
  }

  componentDidMount() {
  this.userStore.addChangeListener(this.onChange.bind(this));

  }


  componentWillUnmount() {

  }
  onChange(state) {
    if(state.actionType=='loginSuccess'){
       this.minnUtil.setLogin(true);
       state.data.locale=this.minnUtil.getCurrentLocale();
       this.minnUtil.setUserInfo(state.data);
       this.parentView.loginStatus('logined');
     }

  }
  changeLoginType(loginType){
   this.setState({loginType:loginType});
  }

  handleChangeLanguage(qrcode){
    let locale='';
     let idx=qrcode.indexOf('_');
     if(idx>0){
       locale=qrcode.substr(idx+1,qrcode.length);
     }
     console.log('handleChangeLanguage:'+locale);
    this.minnUtil.setCurrentLocale(locale);
  }

  qrCodeLoginHandler(data){
    this.userAction.login(name,pwd);
  }

   render() {
    return (this.state.loginType === 'pwd' ? <PwdLogin parentView={this}/> :
      <QRCodeLogin parentView={this} cancelButtonTitle={this.minnUtil.get('login_cancel')} />);
  }
}

const styles = StyleSheet.create({
  form:{
    marginTop:50,
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  formGroup:{
    width: 280,
    height: 40,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  formLabel:{
    marginTop:5,
    marginRight:5,
    textAlign:'left'
  },
  textInput:{
    width:150,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textInputError:{
    height: 30,
    width:150,
    borderColor: 'red',
    borderWidth: 1,
  },
  singleView:{
    width: 200,
    height: 40,
    justifyContent:'space-between',
    backgroundColor : "#d3d5d6"
  },errorView:{
    height:25,
    flexDirection: 'column',
    justifyContent:'space-between'
  },errorMessage:{
    fontSize:12,
    color:'red'
  },
  icon: {
    marginTop:2,
    marginRight:5,
    paddingRight: 20,
    width: 25,
    height: 25,
    left:35
  },title: {
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
