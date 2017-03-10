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

    login(username,pwd){
      let param={};
      param.username=username;
      param.password=pwd;
      this.post('loginSuccess','/j_spring_security_check?username='+username+'&password='+pwd,param);
    }


}
export default  UserAction;
