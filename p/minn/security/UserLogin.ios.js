/**
* @auth:minn
* @qq:394286006
*/
import React,{Component} from 'react';
import {Modal,Button,Alert,View, TouchableHighlight,TextInput,Text,StyleSheet,Image,DeviceEventEmitter} from 'react-native';
import {Select, Option} from "react-native-chooser";
import MainConstant from '../utils/MainConstant';
import MinnUtil from '../utils/MinnUtil';
import HttpUtil from '../utils/HttpUtil';
import UserAction from '../actions/UserAction';
import UserStore from '../stores/UserStore';
class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.parentView=props.parentView;
    this.minnUtil=MinnUtil.getInstance(window);
    this.userStore=new UserStore(this,this.minnUtil);
    this.userAction=new UserAction(this.userStore);
    let locals=this.minnUtil.getLocales();
    let validationState={name:styles.textInput,pwd:styles.textInput};
    let helpBlock={name:false,pwd:false};

    this.state = { name:'',pwd:'',validationState:validationState,helpBlock:helpBlock,rows:[],defaultLanguage:locals[0].name,selectedLanguage:locals[0],languageimg:{uri:MainConstant.url+MainConstant.app+'/'+this.minnUtil.get('main_language_flagImg')}};
  }

  componentDidMount() {
    this.userStore.addChangeListener(this.onChange.bind(this));
    let locals=this.minnUtil.getLocales();
    let rows = locals.map((r, i) => {
        return <Option key={r.locale} value ={r}>{r.name}</Option>;
        });
    this.setState({rows:rows});
  }

  onSelect(data) {
    this.minnUtil.setCurrentLocale(data.locale);
    this.setState({selectedLanguage:data,languageimg:{uri:MainConstant.url+MainConstant.app+'/'+this.minnUtil.get('main_language_flagImg')}});
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

  handleChangeLanguage(event){
    let locale=event.target.value;
    this.minnUtil.setCurrentLocale(locale);
    this.valueChange();
  }

  valueChange(){

    $("#login_title_id").html(this.minnUtil.get('login_title'));
    $("#login_name_prex_id").html(this.minnUtil.get('login_name'));
    $("#login_name_id").attr('placeholder',this.minnUtil.get('login_name'));
    $("#login_pwd_prex_id").html(this.minnUtil.get('login_pwd'));
    $("#login_pwd_id").attr('placeholder',this.minnUtil.get('login_pwd'));
    $("#main_language_flagImg_id").attr('src',this.minnUtil.get('main_language_flagImg'));
    $("#main_language_id").val(this.minnUtil.getCurrentLocale());
    $("#login_action_id").text(this.minnUtil.get('login_action'));

  }

  handleSubmit(event) {

    var name =this.state.name;
    var pwd = this.state.pwd;
     let validationState=this.state.validationState;
     let helpBlock=this.state.helpBlock;
     let showerror=false;
    if(name==''){
      validationState.name=styles.textInputError;
      helpBlock.name='validate_username_notnull';
        showerror=true;
     }
    if(pwd==''){
         validationState.pwd=styles.textInputError;
           helpBlock.pwd='validate_password_notnull';
         showerror=true;
    }
    if(showerror){
        this.setState({validationState:validationState,helpBlock:helpBlock});
    }else{
      this.userAction.login(name,pwd);
    }

    }

   render() {
    return (
      <View style={styles.form}>
      <View style={{height: 115,justifyContent:'space-between'}} >
          <Image style={{width: 100, height: 100}} source={{uri:MainConstant.url+MainConstant.app+'/assets/394286006.png'}} />
        </View>
          <View style={styles.formGroup} >
          <Text style={styles.formLabel}> {this.minnUtil.get('login_name')}</Text><TextInput style={this.state.validationState.name}
           onChangeText={(name) => this.setState({name})} value={this.state.name} />
          </View>
          <View style={styles.errorView} >
          <Text style={styles.errorMessage}>{this.minnUtil.get(this.state.helpBlock.name)}</Text>
          </View>
          <View style={styles.formGroup} >
          <Text style={styles.formLabel}> {this.minnUtil.get('login_pwd')}</Text><TextInput secureTextEntry={true} style={this.state.validationState.pwd}
           onChangeText={(pwd) => this.setState({pwd})} value={this.state.pwd} />
          </View>
          <View style={styles.errorView} >
          <Text style={styles.errorMessage}>{this.minnUtil.get(this.state.helpBlock.pwd)}</Text>
          </View>
          <View style={styles.formGroup} >
          <Image style={styles.icon} source={this.state.languageimg} />
          <Select
            onSelect = {this.onSelect.bind(this)}
            defaultText  = {this.state.defaultLanguage}
            style = {styles.textInput}
            textStyle = {{}}
            backdropStyle  = {{backgroundColor : "#d3d5d6"}}
            optionListStyle = {{backgroundColor : "#F5FCFF"}}
          >
          {this.state.rows}

        </Select>
          </View>
          <View style={styles.errorView} >
          </View>
          <View style={styles.singleView} >
          <Button
              onPress={this.handleSubmit.bind(this)}
              title={this.minnUtil.get('login_action')}
              accessibilityLabel={this.minnUtil.get('login_action')}
            />
          </View>
        </View>

    );
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
    height: 35,
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
    height: 25,
    justifyContent:'space-between',
    backgroundColor : "#d3d5d6"
  },errorView:{
    height:20,
    flexDirection: 'column',
    justifyContent:'space-between'
  },errorMessage:{
    color:'red'
  },
  icon: {
    marginTop:2,
    marginRight:5,
    paddingRight: 20,
    width: 25,
    height: 25,
    left:35
  }
});
export default UserLogin;
