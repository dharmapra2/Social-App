/**
 * in this file we combined all of our reducers
 * by the help of combineReducers method
 */

import { combineReducers } from "redux";

import { authReducer } from "./authReducer";

export const reducers = combineReducers({ authReducer });
