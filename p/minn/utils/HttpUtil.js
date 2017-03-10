/**
* @auth:minn
* @qq:394286006
*/
import AppDispatcher from '../AppDispatcher';
import MainConstant from './MainConstant';
class HttpUtil{
  constructor() {

  }
 static post(method,data){
 fetch(MainConstant.url+MainConstant.app+method, {method: 'POST',headers:{credentials:'include',Accept:'application/json','Content-Type': 'application/json'},body:JSON.stringify(data)})
       .then((response) =>  response.json())
       .then((responseJson) => {
        //  callback(JSON.parse(responseText));
          callback(responseJson);
       }).catch(e => {console.log(`error+${e}`)});
 }

  static  get(){

 }


}
export default HttpUtil;
