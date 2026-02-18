import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const OldRedux: React.FC = () => {

    const count = useSelector((state: any) => state.count.count);

    const dispatch = useDispatch();

    const increment = (count: number) => {
        dispatch({ type: 'INCREMENT', payload: count });
    };

    const decrement = (count: number) => {
        dispatch({ type: 'DECREMENT', payload: count});
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => increment(1)}>Increment</button>
            <button onClick={() => decrement(1)}>Decrement</button>
        </div>
    );
};

export default OldRedux;