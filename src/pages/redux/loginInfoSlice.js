import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginInf: ''
};

const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setLoginInfo: (state, action) => {
      state.loginInf =action.payload;
    }
  }
});

export const { setLoginInfo } = slice.actions;
export default slice.reducer;
