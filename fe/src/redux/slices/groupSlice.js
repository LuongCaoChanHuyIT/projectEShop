import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGroup } from "../../apis/groups";

const initialState = {
  list: [],
  isErr: false,
  isLoad: false,
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllGroups.pending, (state, action) => {
        // Add user to the state array
        state.isLoad = true;
        state.isErr = false;
      })
      .addCase(fetchAllGroups.fulfilled, (state, action) => {
        // Add user to the state array
        state.list = action.payload;
        state.isLoad = false;
        state.isErr = false;
      })
      .addCase(fetchAllGroups.rejected, (state, action) => {
        // Add user to the state array
        state.isLoad = false;
        state.isErr = true;
      });
  },
});

export const fetchAllGroups = createAsyncThunk("groups/fetchAllGroups", async () => {
  const response = await getGroup();
  return response.data;
});

export default groupSlice.reducer;
