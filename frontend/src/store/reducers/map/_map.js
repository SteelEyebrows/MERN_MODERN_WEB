import {
    POST_PLACE,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../../constants";

  
  const initialState = {
    places:[]
  };
  
  export default function(state = initialState, action){
    switch (action.type) {
      case POST_PLACE[REQUEST]:
            return {
            ...state,
            };
      case POST_PLACE[SUCCESS]:
        const {payload} =action;
        console.log(payload);
            return {
            ...state,
            places:payload
            };
      case POST_PLACE[FAILURE]:
            return {
            ...state,
            };
       
      default:
        return state;
    }
  }
  