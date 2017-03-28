/**
* @auth:minn
* @qq:394286006
*/
import AppDispatcher from '../AppDispatcher';
import TemplateAction from './TemplateAction';
import MainConstant from '../utils/MainConstant';
class BarCodeAction extends TemplateAction{
    constructor(store) {
      super(store);

    }


    barCode(barcode){
      console.log('barcodereader:'+barcode);

    }

}
export default  BarCodeAction;
