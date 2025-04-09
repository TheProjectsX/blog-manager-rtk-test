import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsAPI = createApi({
    reducerPath: "postsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: (params = {}) => ({ url: "posts", params }),
        }),
        submitPost: builder.mutation({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body: body,
            }),
        }),
        updatePost: builder.mutation({
            query: ({ id, body }) => ({
                url: `posts/${id}`,
                method: "PUT",
                body: body,
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export default postsAPI.reducer;
export const {
    useFetchPostsQuery,
    useSubmitPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
    middleware,
} = postsAPI;
