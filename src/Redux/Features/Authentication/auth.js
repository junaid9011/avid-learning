import { apiSlice } from "../../api";
export const authenticationApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signUp: builder.mutation({
            query: data => ({
                url: "auth/signup/",
                method: "POST",
                body: data,
            }),
        }),
        signin: builder.mutation({
            query: (data) => ({
                url: "auth/login/",
                method: "POST",
                // headers: {
                //     authorization: `Bearer ${token}`,
                // },
                body: data,
            }),
        }),
        student: builder.query({
            query: (token) => ({
                url: "employee/",
                 headers: {
                        authorization: `Bearer ${token}`,
                     },
            }),
        }),
    }),
});

export const { useStudentQuery,useSignUpMutation ,useSigninMutation} = authenticationApi;