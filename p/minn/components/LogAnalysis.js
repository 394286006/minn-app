/**
* @auth:minn
* @qq:394286006
*/
import React,{Component} from 'react';
import {View} from 'react-native';
import {Pie } from 'react-native-pathjs-charts';
export default class LogAnalysis extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    let data = [{
  "name": "广东",
  "population": 7694980
}, {
  "name": "北京",
  "population": 2584160
}, {
  "name": "上海",
  "population": 6590667,
  "color": {'r':223,'g':154,'b':20}
}, {
  "name": "杭州",
  "population": 7284698
}]

let options = {
  margin: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20
  },
  width: 350,
  height: 350,
  color: '#2980B9',
  r: 50,
  R: 150,
  legendPosition: 'topLeft',
  animate: {
    type: 'oneByOne',
    duration: 200,
    fillTransition: 3
  },
  label: {
    fontFamily: 'Arial',
    fontSize: 8,
    fontWeight: true,
    color: '#ECF0F1'
  }
}

return (
  <View>
    <Pie data={data}
      options={options}
      accessorKey="population"
      margin={{top: 20, left: 20, right: 20, bottom: 20}}
      color="#2980B9"
      pallete={
        [
          {'r':25,'g':99,'b':201},
          {'r':24,'g':175,'b':35},
          {'r':190,'g':31,'b':69},
          {'r':100,'g':36,'b':199},
          {'r':214,'g':207,'b':32},
          {'r':198,'g':84,'b':45}
        ]
      }
      r={50}
      R={150}
      legendPosition="topLeft"
      label={{
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
      }}
      />
  </View>
);
  }
}
