import React, { useState } from "react"

const ChildMemo = React.memo(function Child({ value, name }: { value: number, name?: string }) {
    console.log('Child render', name)
    return <div>{value} - {name}</div>
})

const Child = function Child({ value, name }: { value: number, name?: string }) {
    console.log('Child render', name)
    return <div>{value} - {name}</div>
}

export function ReactMemoExample() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>+</button>
            <ChildMemo value={10} name="Memo" />
            <Child value={20} name="Not memo" />
        </>
    )
}
