import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleUserSav: false,
  toggleUserDel: false,
  toggleUserEdi: false,
  idUserDel: 0,

  dataUserEdi: {},
};

export const togetherSlice = createSlice({
  name: "together",
  initialState,
  reducers: {
    toggleUserDel: (state) => {
      state.toggleUserDel = !state.toggleUserDel;
    },
    toggleUserSav: (state) => {
      state.toggleUserSav = !state.toggleUserSav;
    },
    toggleUserEdi: (state) => {
      state.toggleUserEdi = !state.toggleUserEdi;
    },
    idUserDel: (state, id) => {
      state.idUserDel = id;
    },

    dataUserEdi: (state, data) => {
      state.dataUserEdi = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleUserSav, toggleUserDel, toggleUserEdi, idUserDel, dataUserEdi } =
  togetherSlice.actions;

export default togetherSlice.reducer;
