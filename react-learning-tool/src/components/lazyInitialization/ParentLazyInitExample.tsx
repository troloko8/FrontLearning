import LazyInitExample from './LazyInitExample';
import React, { useState } from 'react';


const ParentLazyInitExample: React.FC = () => {
    const [count, setCount] = useState(5);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Parent Lazy Initialization Example</h1>
            <LazyInitExample rerenderCount={count} />
            <button onClick={incrementCount}>Increase Count</button>
        </div>
    );
};

export default ParentLazyInitExample;