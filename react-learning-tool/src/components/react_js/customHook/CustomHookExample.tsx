import { useCounter } from "./UseCustomHook"

export function CustomHookExample() {
    const { count, inc, dec, reset } = useCounter(10)

    return (
        <>
        <div>{count}</div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>reset</button>
        </>
    )
}
