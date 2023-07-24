import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "../Redux/CounterSlice";

export default configureStore({

    reducer: {
        counter: counterSlice,
    },
})