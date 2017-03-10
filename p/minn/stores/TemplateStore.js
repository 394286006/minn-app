/**
* @auth:minn
* @qq:394286006
*/
import events from 'events';
import AppDispatcher from '../AppDispatcher';
import assign from 'object-assign';
import {DeviceEventEmitter} from 'react-native';

class TemplateStore{
   constructor() {
      this.CHANGE_EVENT = 'change';
      assign(this, events.EventEmitter.prototype, {
      addChangeListener: function (callback) {
        this.on(this.CHANGE_EVENT, callback);
      },
      removeChangeListener: function (callback) {
        this.removeListener(this.CHANGE_EVENT, callback);
      },

      emitChange: function(action) {
        this.emit(this.CHANGE_EVENT,action);
      }
    });
      this.dispatchToken = AppDispatcher.register(this.handleAction);
   }

   handleAction(action) {
        action.store.emitChange({actionType:action.actionType,data:action.data});
   }


 }

export default TemplateStore;
