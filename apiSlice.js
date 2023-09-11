import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://strangers-things.herokuapp.com/api/2307-fsa-et-web-ft"}),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => "/posts",
        }),
        getSinglePost: builder.query({
            query: (username) => `/posts/${username}`,
        }),
    }),
});

export const { useGetAllPostsQuery, useGetSinglePostQuery } = postsApi;
