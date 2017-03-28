/**
* @auth:minn
* @qq:394286006
*/
import React,{Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Image,
  RecyclerViewBackedScrollView,
  Platform
} from 'react-native';
import MainConstant from './utils/MainConstant';
import MinnUtil from './utils/MinnUtil';
import ReportAnalysis from './components/ReportAnalysis';
import UserAnalysis from './components/UserAnalysis';
import LogAnalysis from './components/LogAnalysis';
import QRCodeLogin from './security/QRCodeLogin';
import BarCodeReader from './utils/BarCodeReader';
import UserAction from './actions/UserAction';
import UserStore from './stores/UserStore';
import BarCodeAction from './actions/BarCodeAction';
import BarCodeStore from './stores/BarCodeStore';
export default class Wellcome extends Component{
  constructor(props) {
    super(props);
    this.minnUtil=MinnUtil.getInstance(window);
    this.userStore=new UserStore(this,this.minnUtil);
    this.userAction=new UserAction(this.userStore);
    this.barCodeStore=new BarCodeStore(this,this.minnUtil);
    this.barCodeAction=new BarCodeAction(this.barCodeStore);
  }
  componentWillMount() {
  this.userStore.addChangeListener(this.onChange.bind(this));
    }
    onChange(state) {
      if(state.actionType=='qrCodeloginSuccess'){
         this.props.navigator.pop();
       }

    }
  goReport(event) {
    this.props.onForward(this.minnUtil.get('wellcome_reportanalysis'),ReportAnalysis,{parentView:this});
  }

  goUser(event) {
    this.props.onForward(this.minnUtil.get('wellcome_useranalysis'),UserAnalysis,{parentView:this});
  }
  goLog(event) {
    this.props.onForward(this.minnUtil.get('wellcome_loganalysis'),LogAnalysis,{parentView:this});
  }

  goPc(event) {
      this.props.onForward(this.minnUtil.get('login_scanlogin'),QRCodeLogin,{parentView:this,cancelButtonVisible:false});
  }
  goBarcode(event) {
      this.props.onForward(this.minnUtil.get('wellcome_barcodereader'),BarCodeReader,{parentView:this,cancelButtonVisible:false});
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.link}>
        <TouchableHighlight style={styles.highlight} onPress={this.goUser.bind(this)}>
         <View style={styles.labeLink}>
           <Image style={styles.thumb} source={{uri:MainConstant.url+MainConstant.app+'/assets/chart2.png'}} />
           <Text style={styles.text}>
            {this.minnUtil.get('wellcome_useranalysis')}
           </Text>
         </View>
     </TouchableHighlight>
     <TouchableHighlight style={styles.highlight} onPress={this.goReport.bind(this)}>
      <View style={styles.labeLink}>
        <Image style={styles.thumb} source={{uri:MainConstant.url+MainConstant.app+'/assets/chart1.png'}} />
        <Text style={styles.text}>
           {this.minnUtil.get('wellcome_reportanalysis')}
        </Text>
      </View>
  </TouchableHighlight>
  <TouchableHighlight style={styles.highlight} onPress={this.goLog.bind(this)}>
   <View style={styles.labeLink}>
     <Image style={styles.thumb} source={{uri:MainConstant.url+MainConstant.app+'/assets/chart3.png'}} />
     <Text style={styles.text}>
       {this.minnUtil.get('wellcome_loganalysis')}
     </Text>
   </View>
  </TouchableHighlight>
  </View>
  <View style={styles.link} >
        <TouchableHighlight   style={styles.highlight}>
         <View style={styles.labeLink}>
           <Image style={styles.thumb} source={{uri:MainConstant.url+MainConstant.app+'/assets/chart4.png'}} />
           <Text style={styles.text}>
           {this.minnUtil.get('wellcome_exlink')}
           </Text>
         </View>
     </TouchableHighlight>
     <TouchableHighlight   style={styles.highlight} onPress={this.goPc.bind(this)}>
          <View style={styles.labeLink}>
            <Image style={styles.thumb} source={{uri:MainConstant.url+MainConstant.app+'/assets/qrcode.png'}} />
            <Text style={styles.text}>
            {this.minnUtil.get('login_scanlogin')}
            </Text>
          </View>
      </TouchableHighlight>
      <TouchableHighlight   style={styles.highlight} onPress={this.goBarcode.bind(this)}>
           <View style={styles.labeLink}>
             <Image style={styles.thumb} source={{uri:MainConstant.url+MainConstant.app+'/assets/barcode.png'}} />
             <Text style={styles.text}>
             {this.minnUtil.get('wellcome_barcodereader')}
             </Text>
           </View>
       </TouchableHighlight>
    </View>
 </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  link:{
  height:110,
  flexDirection : 'row' ,
  flexWrap: 'wrap',
  justifyContent :'space-around'
 },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
labeLink:{
  width:100,
  height:100,
  alignItems: 'center',
  backgroundColor: '#F6F6F6',
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#CCC'
},highlight:{
  height:100
}
});
