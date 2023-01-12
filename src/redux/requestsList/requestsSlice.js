import { createSlice } from "@reduxjs/toolkit";

import { requestsCoordsMock } from "./requestsCoordsMock";

const initialState = {
  allRequestsCoords: requestsCoordsMock,
  selectedRow: null,
  pathDetails: null,
};

export const requestsListSlice = createSlice({
  name: "requestsList",
  initialState,
  reducers: {
    getPathDetails: (state, { payload }) => {
      state.selectedRow = payload;
    },
    setPathDetails: (state, action) => {
      state.pathDetails = action.payload;
    },
    resetRequest: (state) => (state.selectedRequest = null),
  },
});

export const { getPathDetails, resetRequest, setPathDetails } =
  requestsListSlice.actions;

export default requestsListSlice.reducer;
