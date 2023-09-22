import {createSlice} from '@reduxjs/toolkit';
import {authRequestAsync} from './authAsync';

const initialState = {
  user: {},
  error: '',
  status: '',
};

const authSlice = createSlice({
  name: 'userData',
  initialState,
  extraReducers: {
    [authRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
      state.user = [];
    },
    [authRequestAsync.fulfilled.type]: (state, action) => {
      console.log(action, 'actions-fulfilled');
      state.user = action.payload?.data;
      state.error = '';
      state.status = 'loaded';
    },
    [authRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    }
  }
});

export default authSlice.reducer;
