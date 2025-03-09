import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChartData } from "../../types";

interface ChartState {
  data: ChartData[];
}

const initialState: ChartState = {
  data: []
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<ChartData[]>) => {
      state.data = action.payload;
    }
  }
});

export const { setChartData } = chartSlice.actions;
export default chartSlice.reducer;
