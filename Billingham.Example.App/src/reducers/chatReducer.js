import * as actionTypes from '../constants/actionTypes';

let initialState={
  messages:[],
  textBoxText:''
};


export default function (state=initialState,action) {
  switch(action.type){
    case actionTypes.USER_INPUT:
      return state;
    default:
      return state;
  }
}
