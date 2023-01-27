import { getCookie } from "Utlis/cookie";
import { apiSlice } from "../../api";
export const courseApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addCourse: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: "course/details/",
                headers: {
                  "Authorization": `Bearer ${data?.token}`,
                },
                
                    
                body: data.body,
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
        getCouse: builder.query({
            query: () => ({
                url: "course/free/",
                 
            }),
        }),
    }),
});

export const { useAddCourseMutation,useGetCouseQuery} = courseApi;