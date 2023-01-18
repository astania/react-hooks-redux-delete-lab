import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    // create reducer methods
    bandAdded(state, action) {
      state.entities.push({id: uuid(), name: action.payload});
    },
    bandRemoved(state, action) {
     const filteredBands = state.entities.filter(band => band.id !== action.payload)
     state.entities = filteredBands

    }
  },
});

// export the action creators
export const { bandAdded, bandRemoved } = bandsSlice.actions;

export default bandsSlice.reducer;
