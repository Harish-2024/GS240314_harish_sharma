import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculationData } from "../../types";

interface CalculationState {
  data: CalculationData[];
}

const initialState: CalculationState = {
  data: []
};

export const calculationSlice = createSlice({
  name: "calculation",
  initialState,
  reducers: {
    setCalculationData: (state, action: PayloadAction<CalculationData[]>) => {
      state.data = action.payload;
    }
  }
});

export const { setCalculationData } = calculationSlice.actions;
export default calculationSlice.reducer;
