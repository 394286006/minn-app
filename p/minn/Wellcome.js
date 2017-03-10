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
  RecyclerViewBackedScrollView
} from 'react-native';
import MainConstant from './utils/MainConstant';
import MinnUtil from './utils/MinnUtil';
import ReportAnalysis from './components/ReportAnalysis';
import UserAnalysis from './components/UserAnalysis';
import LogAnalysis from './components/LogAnalysis';
export default class Wellcome extends Component{
  constructor(props) {
    super(props);
    this.minnUtil=MinnUtil.getInstance(window);
  }

  goReport(event) {
    this.props.onForward(this.minnUtil.get('wellcome_reportanalysis'),ReportAnalysis);
  }

  goUser(event) {
    this.props.onForward(this.minnUtil.get('wellcome_useranalysis'),UserAnalysis);
  }
  goLog(event) {
    this.props.onForward(this.minnUtil.get('wellcome_loganalysis'),LogAnalysis);
  }

componentWillMount() {

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
