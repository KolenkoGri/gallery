import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../../api/const';
import {getToken} from '../../../api/token';

export const authRequestAsync = createAsyncThunk('userData/fetch', (id, {getState}) => {
  const accessToken = getToken();
  return axios.get(`${URL_API}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(({data}) => {
      console.log(data, 'dataUser-splash');
      return {data};
    }).catch(error => ({error: error.toString()}));
});
