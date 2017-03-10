/**
* @auth:minn
* @qq:394286006
*/
import React,{Component} from 'react';
import {View} from 'react-native';
import { StockLine,Radar } from 'react-native-pathjs-charts';
import moment from 'moment'
export default class ReportAnalysis extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let data = [{
      "广州": 74,
      "清远": 29,
      "佛山": 40,
      "中山": 40,
      "东莞": 30,
      "澳门": 25,
      "香港": 44
    }]

    let options = {
      width: 290,
      height: 290,
      margin: {
        top: 20,
        left: 20,
        right: 30,
        bottom: 20
      },
      r: 150,
      max: 100,
      fill: "#2980B9",
      stroke: "#2980B9",
      animate: {
        type: 'oneByOne',
        duration: 200
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: true,
        fill: '#34495E'
      }
    }

    return (
      <View>
        <Radar data={data} options={options} />
      </View>
    );
  }
}
