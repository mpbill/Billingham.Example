import * as types from '../constants/actionTypes';

let initialState={
  messages:[],
  pendingMessages:[],
  message:'',
  name:'',
  isFlyUpExpanded:false,
};

export function getAllMessages(state) {
  let allMessages=[...state.chatReducer.pendingMessages,...state.chatReducer.messages];
  return allMessages;
};


export default function (state=initialState,action) {
  switch(action.type){
    case types.USER_INPUT_MESSAGE:
      return {...state,message:action.payload};
    case types.USER_INPUT_NAME:
      return {...state,name:action.payload};
    case types.TOGGLE_FLYUP:
      return {...state,isFlyUpExpanded:!state.isFlyUpExpanded};
    case types.SUBMIT_MESSAGE:
      return {...state,message:'',name:'',isFlyUpExpanded:false,pendingMessages:[...state.pendingMessages,action.payload]};
    default:
      return state;
  }
}

/*
  guid generator
  https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
*/
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
