'use strict';
var React =require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Vibration,
  Platform
} = ReactNative;
import Camera from 'react-native-camera';

var QRCodeLogin = React.createClass({

  propTypes: {
    cancelButtonVisible: React.PropTypes.bool,
    cancelButtonTitle: React.PropTypes.string,
    onSucess: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    parentView:React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      cancelButtonVisible: true,
      cancelButtonTitle: 'Cancel',
      parentView:{}
    };
  },

  _onPressCancel: function() {
    var $this = this;
    requestAnimationFrame(function() {
      if($this.props.navigator){
        $this.props.navigator.pop();
      }else{
          $this.parentView.changeLoginType('pwd');
      }

    });
  },

  _onBarCodeRead: function(result) {
    var $this = this;
    if (this.barCodeFlag) {
      this.barCodeFlag = false;
      setTimeout(function() {
        //Vibration.vibrate();
          if($this.props.navigator){
            $this.parentView.userAction.loginPcByQrCode('',result.data,$this.parentView.minnUtil.getCurrentLocale());
        }else{
            $this.parentView.handleChangeLanguage(result.data);
            $this.parentView.userAction.loginByQrCode(result.data);
        }


      }, 1000);
    }
  },

  render: function() {
    var cancelButton = null;
    this.barCodeFlag = true;
    this.parentView=this.props.parentView;
    if (this.props.cancelButtonVisible) {
      cancelButton = <CancelButton onPress={this._onPressCancel} title={this.props.cancelButtonTitle} />;
    }

    return (
      <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
        {cancelButton}
      </Camera>
    );
  },
});

var CancelButton = React.createClass({
  render: function() {
    return (
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.cancelButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  camera: {
    ...Platform.select({
      ios: {
        height: 650
      },
      android: {
        height: 660,
        marginTop:-22
      }
    }),
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
    bottom: 10,
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
});

module.exports = QRCodeLogin;
