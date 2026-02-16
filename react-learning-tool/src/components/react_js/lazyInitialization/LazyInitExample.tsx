import React, { useMemo, useState } from 'react';

function expensiveInit(label: string) {
    console.log(`❌ expensive init CALLED for ${label}`);
    let sum = 0;
    for (let i = 0; i < 100_000_000; i++) {
        sum += i;
    }

    return sum;
}

interface LazyInitExampleProps {
    rerenderCount: number;
}

export const LazyInitExample: React.FC<LazyInitExampleProps> = ({ rerenderCount }) => {
    // ✅ LAZY — выполнится ОДИН РАЗ
    const [lazyCount, setLazyCount] = useState(() => {
        console.log('✅ lazy initializer executed');
        return expensiveInit('LAZY');
    });

    // ❌ EAGER — вычисляется ПРИ КАЖДОМ РЕНДЕРЕ
    const [eagerCount, setEagerCount] = useState(
        expensiveInit('EAGER')
    );

    const value = useMemo(() => expensiveInit("Memo"), [])

    console.log('🔄 component render');

    return (
        <div>
        <h2>Lazy vs Eager initialization</h2>

        <p>Lazy count: {lazyCount}</p>
        <button onClick={() => setLazyCount(c => c + 1)}>
            Increment lazy
        </button>

        <hr />

        <p>Eager count: {eagerCount}</p>
        <button onClick={() => setEagerCount(c => c + 1)}>
            Increment eager
        </button>

        <hr />

        <p>Rerender count: {rerenderCount}</p>
        </div>
    );
};

export default LazyInitExample;
