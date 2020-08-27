import {
    POST_LOGIN,
    POST_LOGOUT,
    POST_REGISTER,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../constants";
  import { createAction } from "./action-helpers";
  
  export const Actions = {

    loginRequest: (data) => createAction(POST_LOGIN[REQUEST], data),
    loginSuccess: (data) => createAction(POST_LOGIN[SUCCESS], data),
    loginFailure: (data) => createAction(POST_LOGIN[FAILURE], data),

    logOutRequest: (data) => createAction(POST_LOGOUT[REQUEST], data),
    logOutSuccess: (data) => createAction(POST_LOGOUT[SUCCESS], data),
    logOutFailure: (data) => createAction(POST_LOGOUT[FAILURE], data),

    registerRequest:(data) =>createAction(POST_REGISTER[REQUEST],data),
    registerSuccess:(data) =>createAction(POST_REGISTER[SUCCESS],data),
    registerFailure:(data) =>createAction(POST_REGISTER[FAILURE],data),
  };
