import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userInfoAPI = createApi({
    reducerPath: "userInfoAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        getInfo: builder.query({ query: (id = 1) => `users/${id}` }),
    }),
});

export default userInfoAPI.reducer;
export const { useGetInfoQuery, middleware } = userInfoAPI;
