/**
* @auth:minn
* @qq:394286006
*/
import MinnUtil from './MinnUtil';
import MainConstant from './MainConstant'; 
import MessageUtil from './MessageUtil';
class SocketClient {
  constructor(url,uuid,eventFunction) {
    this.url=url;
    this.eventFunction=eventFunction;
    this.uuid=uuid;
    this.ws=null;
  }

static getInstance(url,uuid,eventFunction){
    return new SocketClient(url,uuid,eventFunction);
  }

  connect(){
    let ws;
    let uuid=this.uuid;
    if("WebSocket" in window)
     {
      ws= new WebSocket(this.url) ;
      ws.onopen = function(){
         let param={};
          param.group=-1;
          param.clientId=-1;
          param.method='connect';
          param.invokeMethod='invokeConnect';
          param.data=new Object();
          param.data.msg='connect';
          param.status='connect';
          param.uuid=uuid;
          ws.send(MinnUtil.convert2Json(param));
      };
      let eventFunction=this.eventFunction;
      ws.onmessage = function(evt){
         console.log('receive onmessage'+evt.data);
         let data=JSON.parse(evt.data);
          switch(data.status){
            case MainConstant.CONNECTFAIL:
              MessageUtil.getInstance(document).showMessage(data.data.msg);
            break;
            case MainConstant.CONNECTED:
              MessageUtil.getInstance(document).showMessage(data.data.msg);
               eventFunction(data);
            break;
            case MainConstant.CONNECT:
              MessageUtil.getInstance(document).showMessage(data.data.msg);
            break;
            case MainConstant.CONNECTING:
              eventFunction(data);
            break;
          }  
        
      };
      ws.onclose = function(){
         let evt={};
         evt.status=MainConstant.CONNECTFAIL;
         evt.data={};
         evt.data.msg='Connection is closed...';
          MessageUtil.getInstance(document).showMessage('Connection is closed...');
      };
     
      this.ws=ws;
    }else{
       let evt={};
        evt.status=MainConstant.CONNECTFAIL;
        evt.data={};
        evt.data.msg='WebSocket NOT supported by your Browser!';
        eventFunction(evt);
    }
  }

  send(param){
    let ws=this.ws;
    let str=MinnUtil.convert2Json(param);
    ws.send(str);
  }


}
export default SocketClient;
