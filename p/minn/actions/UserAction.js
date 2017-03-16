/**
* @auth:minn
* @qq:394286006
*/
import AppDispatcher from '../AppDispatcher';
import TemplateAction from './TemplateAction';
import MainConstant from '../utils/MainConstant';
class UserAction extends TemplateAction{
    constructor(store) {
      super(store);

    }

    login(username,pwd,lang){
      let param={};
      param.username=username;
      param.password=pwd;
      param.logintype='3';
      param.key='';
      param.lang=lang;
      this.post('loginSuccess','/j_spring_security_check?username='+username+'&password='+pwd+'&logintype=3&key=&lang='+lang,param);
    }

    loginByQrCode(qrcode){
      let param={};
      param.username='qrcode';
      param.password='qrcode';
      param.logintype='4';
      param.key=qrcode.substr(0,qrcode.indexOf('_'));
      param.lang='';
      this.post('loginSuccess','/j_spring_security_check?username=&password=&logintype=4&key='+param.key+'&lang=',param);
    }

    loginPcByQrCode(name,qrcode,lang){
      let param={};
      param.username=name;
      param.password='qrcode';
      param.logintype='4';
      param.key=qrcode+'_'+lang;
      param.lang=lang;
      console.log('qrcodeLoginpc:'+param.key);
      this.post('qrCodeloginSuccess','/qrcodeLogin?key='+param.key,param);
    }

}
export default  UserAction;
