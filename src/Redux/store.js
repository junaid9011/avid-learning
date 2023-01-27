import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import authReducer from "./Features/Authentication/authReducer";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth:authReducer
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
