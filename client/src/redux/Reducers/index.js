/**
 * in this file we combined all of our reducers
 * by the help of combineReducers method
 */

import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { postReducer } from "./postReducer";

export const reducers = combineReducers({ authReducer, postReducer });
