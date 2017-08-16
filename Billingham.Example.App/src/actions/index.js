import * as types from '../constants/actionTypes';
import {uuidv4} from '../helpers/uuidv4'
export function Action(type, payload) {
  return {type:type,payload:payload}
}
export function ToggleFlyUp() {
  return Action(types.TOGGLE_FLYUP);
}
export function UserInputMessage(text) {
  return Action(types.USER_INPUT_MESSAGE,text);
}
export function UserInputName(text) {
  return Action(types.USER_INPUT_NAME,text);
}

export function SubmitMessage(name,message) {
  let newMessage = {name:name,message:message,time:new Date(),localId:uuidv4()};
  return function (dispatch) {

    dispatch(Action(types.SUBMIT_MESSAGE,newMessage));
  }
}
