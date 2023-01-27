import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { apiBaseUrl } from "../../config/index"
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://20.235.242.77:3306/api/',
    }),
    endpoints: builder => ({}),
});
