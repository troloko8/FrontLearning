import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';


export const postAPI = createApi({
    reducerPath: 'postAPI',
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Post'], // tagTypes: ['Post'] - we define a tag type for our posts. This will allow us to manage cache invalidation more effectively. When we perform operations that change the data (like creating a new post), we can invalidate the 'Post' tag, which will trigger any queries that provide this tag to refetch their data.
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => `posts?_limit=${limit}`,
            providesTags: result => ['Post'] // providesTags: result => result ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post'] : ['Post'] - if we want to invalidate only the specific post that was created, we can provide tags for each post in the result. This way, when a new post is created, only the queries that provided the 'Post' tag will be invalidated and refetched.
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post'] // invalidatesTags: ['Post'] - after creating a post, the 'Post' tag will be invalidated, causing any queries that provide this tag to refetch their data.
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        })
    })
})
