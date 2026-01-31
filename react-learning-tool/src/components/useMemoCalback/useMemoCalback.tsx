import React, { useState, useMemo, useCallback } from 'react';

const UseMemoCallbackExample: React.FC = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // useMemo: Memoizes the result of a computation
    const computedValue = useMemo(() => {
        console.log('useMemo: Computing value...');
        return count * 2;
    }, [count]);

    // useCallback: Memoizes the function itself
    const memoizedCallback = useCallback(() => {
        console.log('useCallback: Count is', count);
    }, [count]);

    const regularCallback = () => {
        console.log('Regular function: Count is', count);
    };

    const staleClosureExample = useCallback(() => {
        console.log('Stale closure example: Count is', count);
    }, [])

    return (
        <div>
            <h1>useMemo and useCallback Example</h1>
            <div>
                <p>Count: {count}</p>
                <p>Other Count: {otherCount}</p>
                <p>Computed Value (useMemo): {computedValue}</p>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other Count</button>
            </div>
            <div>
                <button onClick={memoizedCallback}>Run Memoized Callback</button>
                <button onClick={regularCallback}>Run Regular Callback</button>
                <button onClick={staleClosureExample}>Run Stale Closure Example</button>
            </div>
        </div>
    );
};

export default UseMemoCallbackExample;