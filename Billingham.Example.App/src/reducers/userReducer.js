import * as actionTypes from '../constants/actionTypes';
let initialState={
  isLoggedIn:false
};

export default function userReducer(state = initialState, action) {
  switch(action.type){
    case actionTypes.LOG_IN:
      return {isLoggedIn:true};
    default:
      return state;
  }
}
