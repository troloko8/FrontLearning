import React, { useEffect, useState } from 'react';
import { postAPI } from './services/postService';
import { IPost } from './models/IPost';
    // to run the server use server-json package: npx json-server --watch db.json --port 5000



export const PostContainer2 = () => {
    const [limit, setLimit] = useState(10);

    const { data, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {
        // pollingInterval: 1000, // refetch data every 1 second
        // skip: false,
        // refetchOnFocus: true,
        // refetchOnReconnect: true
    })

    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    
    const handleCreator = () => {
        const title: string= prompt('Enter post title') ?? ''
        const body = prompt('Enter post body') ?? '';

        if (title && body) {
            createPost({title, body} as IPost);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            // setLimit(2);
        }, 2000)
    }, [])

    const handleDelete = (id: number) => {
        deletePost(id);
    }

    const handleUpdate = (post: IPost) => {
        const title: string= prompt('Enter post title', post.title) ?? post.title
        const body = prompt('Enter post body', post.body) ?? post.body;

        if (title && body) {
            updatePost({...post, title, body} as IPost);
        }
    }

    return (
        <div style={{fontSize: 12, border: '1px solid black'}}>
            PostContainer2
            <hr />
            <button onClick={() => {
                setLimit(100);
                refetch()
            }}>Refetch</button>

            <button onClick={handleCreator}>Create Post</button>

            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.toString()}</div>}
            {data && <div>{data.length} posts loaded</div>}
            {data && data.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button style={{fontSize: 12, padding: 8}} onClick={() => handleDelete(post.id)}>Remove</button>
                    <button style={{fontSize: 12, padding: 8}} onClick={() => handleUpdate(post)}>Update</button>
                </div>
            ))}
        </div>
    );
}