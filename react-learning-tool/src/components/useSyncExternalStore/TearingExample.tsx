import { store } from "./store"
import { useStore } from "./useStore"

export function TearingExample() {
    const value = useStore()

    return (
        <div>
        <div>Value: {value}</div>
        <button onClick={() => store.set(value + 1)}>
            +
        </button>
        </div>
    )
}
