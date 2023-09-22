import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import tokenSlice from './token/tokenSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  token: tokenSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
