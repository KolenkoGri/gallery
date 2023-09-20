import {createSlice} from '@reduxjs/toolkit';
import {getToken} from '../../../api/token';

const initialState = {
  auth: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuth(state, action) {
      const token = getToken();
      console.log(action);
      if (token) {
        state.auth = true;
      }
    }
  }
});

export const {changeAuth} = authSlice.actions;

export default authSlice.reducer;
