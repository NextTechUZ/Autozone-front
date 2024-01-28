import { createSlice } from '@reduxjs/toolkit';

const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState: {
    value: false,
  },
  reducers: {
    changer: (state) => {
      state.value = !state.value;
    }
   
  },
});

export const { changer } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
