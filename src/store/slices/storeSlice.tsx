import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreData } from "../../types";

interface StoreState {
  data: StoreData[];
}

const initialState: StoreState = {
  data: []
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStoreData: (state, action: PayloadAction<StoreData[]>) => {
      state.data = action.payload;
    },
    addStore: (state, action: PayloadAction<StoreData>) => {
      state.data.push(action.payload);
    },
    deleteStore: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(store => store.id !== action.payload);
    }
  }
});

export const { setStoreData, addStore, deleteStore } = storeSlice.actions;
export default storeSlice.reducer;
