import { combineReducers } from "redux";

import authReducer from './auth';
import mapReducer from './map';
export const rootReducer = combineReducers({
  auth:authReducer,
  map:mapReducer,
  });

