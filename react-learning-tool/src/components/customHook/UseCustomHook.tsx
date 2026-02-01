import { useState } from "react"

export function useCounter(initial = 0) {
    const [count, setCount] = useState(initial)

    const inc = () => setCount(c => c + 1)
    const dec = () => setCount(c => c - 1)
    const reset = () => setCount(initial)

    return { count, inc, dec, reset }
}
