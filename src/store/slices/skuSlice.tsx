import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SkuData } from "../../types";

interface SkuState {
  data: SkuData[];
}

const initialState: SkuState = {
  data: []
};

export const skuSlice = createSlice({
  name: "sku",
  initialState,
  reducers: {
    setSkuData: (state, action: PayloadAction<SkuData[]>) => {
      state.data = action.payload;
    },
    addSku: (state, action: PayloadAction<SkuData>) => {
      state.data.push(action.payload);
    },
    deleteSku: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(store => store.id !== action.payload);
    }
  }
});

export const { setSkuData, addSku, deleteSku } = skuSlice.actions;
export default skuSlice.reducer;
