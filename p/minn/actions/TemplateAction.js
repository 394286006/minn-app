/**
* @auth:minn
* @qq:394286006
*/
import MainConstant from '../utils/MainConstant';
import AppDispatcher from '../AppDispatcher';
class TemplateAction{
  constructor(store) {
     this.store=store;
  }

  post(actionType,method,param){
    fetch(MainConstant.url+MainConstant.app+method, {method: 'POST',headers:{credentials:'include','Accept': 'application/json',
         'Content-Type': 'application/json'},body:JSON.stringify(param)})
          .then((response) =>  response.text())
          .then((responseText) => {
            console.log('responseText:'+responseText);
           let action = {
            store:this.store,
            actionType: actionType,
            data: JSON.parse(responseText).data
          };
           AppDispatcher.dispatch(action);

          }).catch(e => {console.log(`error+${e}`)});
  }

}
export default  TemplateAction;
