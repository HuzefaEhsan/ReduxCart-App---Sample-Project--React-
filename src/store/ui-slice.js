/***************************************************************************************
 *    Title: ReduCart App source code
 *    Author: Huzefa Ehsan
 *    Date: 27-10-2022
 *    Code version: 0.1
 *    Availability: https://github.com/HuzefaEhsan
 *
 ***************************************************************************************/

import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
