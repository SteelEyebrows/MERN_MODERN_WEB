import {
    POST_PLACE,
    REQUEST,
    SUCCESS,
    FAILURE
  } from "../constants";
  import { createAction } from "./action-helpers";
  
  export const Actions = {
    placeRequest: (data) => createAction(POST_PLACE[REQUEST], data),
    placeSuccess: (data) => createAction(POST_PLACE[SUCCESS], data),
    placeFailure: (data) => createAction(POST_PLACE[FAILURE], data),

  };
