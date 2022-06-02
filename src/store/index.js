import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Todoslice";

const store = configureStore({
    reducer:{
        todo: TodoSlice.reducer,
    }
})

export default store