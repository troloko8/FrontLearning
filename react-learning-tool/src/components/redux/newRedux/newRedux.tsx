import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { userSlice } from './store/reducers/userSlice';
import { fetchUser } from './store/reducers/actionCreator';
import { PostContainer } from './PostContainer';
import { PostContainer2 } from './PostContainer2';

const NewRedux: React.FC = () => {
    const {count} = useAppSelector(state => {
        console.log({state})
        return state.userReducer
    });
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch()

    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    useEffect(() => {
        if (isLoading) {
            console.log('Loading users...')
        } else if (error) {
            console.log('Error:', error)
        } else {
            console.log('Users:', users)
        }
    }, [users, isLoading, error])


    return (
        <div>
            {/* <h1 style={{fontSize: 20, color: 'white'}}>{count}</h1>
            <button onClick={() => dispatch(increment(2))}>Increment</button>    */}
            {/* {isLoading && <h1>Loading...</h1>}
            {error && <h1 style={{color: 'red'}}>{error}</h1>}
            {users.length > 0 && (
                <div>
                    <h1>Users:</h1>
                    {users.map(user => (
                        <div key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    ))}
                    <hr />
                </div>
            )} */}
            
            {/* cache example */}
            <div style={{display: 'flex', gap: '20px'}}>
                <PostContainer />
                <PostContainer2 />
            </div>

            
        </div>
    );
}

export default NewRedux;