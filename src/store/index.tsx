import { configureStore } from "@reduxjs/toolkit";
import chart from "./slices/chartSlice";

const store = configureStore({
    reducer: {
        chart
    }
})

export default store;