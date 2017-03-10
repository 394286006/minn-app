/**
* @auth:minn
* @qq:394286006
*/
import MinnUtil from './MinnUtil';
class MessageUtil {
  constructor(doc) {
    this.minnUtil=MinnUtil.getInstance(doc); 
    this.messageUtil=null;    
  }

static getInstance(doc){
 
    if(this.messageUtil==null){
        this.MessageUtil=new MessageUtil(doc);
    }
    return this.MessageUtil;
  }

  showMessage(msg){
    $.alert({title: this.minnUtil.get('alert_title_msg'),content:msg,confirmButton: this.minnUtil.get('main_alert_oklabel')});
  }


}
export default MessageUtil;
