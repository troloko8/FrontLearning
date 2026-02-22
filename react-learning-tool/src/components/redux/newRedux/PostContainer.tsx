import React from 'react';
import { postAPI } from './services/postService';



export const PostContainer = () => {

    const { data, error, isLoading } = postAPI.useFetchAllPostsQuery(5, {
        // skip: false,
        // refetchOnFocus: true,
        // refetchOnReconnect: true
    })
    return (
        <div>
            PostContainer
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.toString()}</div>}
            {data && <div>{data.length} posts loaded</div>}
            {data && data.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button>Remove</button>
                </div>
            ))}
        </div>
    );
}