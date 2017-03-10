/**
* @auth:minn
* @qq:394286006
*/
import React,{Component} from 'react';
import {View} from 'react-native';
import {Tree } from 'react-native-pathjs-charts';
export default class UserAnalysis extends Component{
  constructor(props) {
    super(props);
  }

  render() {
      let data = {
        "name": "中国",
        "children": [{
          "name": "广东",
          "children": [{
            "name": "广州"
          }, {
            "name": "佛山"
          }, {
            "name": "清远"
          }]
        }, {
          "name": "北京",
          "children": [{
            "name": "东城区"
          }, {
            "name": "西城区"
          }, {
            "name": "朝阳区"
          }]
        }]
      }

      let options = {
        margin: {
          top: 20,
          left: 50,
          right: 80,
          bottom: 20
        },
        width: 200,
        height: 200,
        fill: "#2980B9",
        stroke: "#3E90F0",
        r: 2,
        animate: {
          type: 'oneByOne',
          duration: 200,
          fillTransition: 3
        },
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      };

      return (
        <View>
          <Tree data={data} options={options}  />
        </View>
      );
  }
}
