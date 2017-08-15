// Set up your root reducer here...
 import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import userReducer from './userReducer';
import chatReducer from './chatReducer';
export default combineReducers({
  userReducer,
  chatReducer,
  routing: routerReducer
})


