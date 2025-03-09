import { configureStore } from "@reduxjs/toolkit";
import chart from "./slices/chartSlice";
import calendar from "./slices/calendarSlice";
import calcuations from "./slices/calculation";
import storeSlice from "./slices/storeSlice";
import skuSlice from "./slices/skuSlice";

const store = configureStore({
    reducer: {
        chart,
        calendar,
        calcuations,
        storeSlice,
        skuSlice
    }
})

export default store;