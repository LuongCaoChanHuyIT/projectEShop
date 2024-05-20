import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // user
  toggleUserSav: false,
  toggleUserDel: false,
  toggleUserEdi: false,
  idUserDel: 0,
  dataUserEdi: {},
  //group
  toggleGroupSav: false,
  toggleGroupDel: false,
  toggleGroupEdi: false,
  idGroupDel: 0,
  dataGroupEdi: {},
};

export const togetherSlice = createSlice({
  name: "together",
  initialState,
  reducers: {
    //user
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
    //group
    toggleGroupDel: (state) => {
      state.toggleGroupDel = !state.toggleGroupDel;
    },
    toggleGroupSav: (state) => {
      state.toggleGroupSav = !state.toggleGroupSav;
    },
    toggleGroupEdi: (state) => {
      state.toggleGroupEdi = !state.toggleGroupEdi;
    },
    idGroupDel: (state, id) => {
      state.idGroupDel = id;
    },
    dataGroupEdi: (state, data) => {
      state.dataGroupEdi = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  //user
  toggleUserSav,
  toggleUserDel,
  toggleUserEdi,
  idUserDel,
  dataUserEdi,
  //group
  toggleGroupSav,
  toggleGroupDel,
  toggleGroupEdi,
  idGroupDel,
  dataGroupEdi,
} = togetherSlice.actions;

export default togetherSlice.reducer;
