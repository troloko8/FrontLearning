// store.ts
type Listener = () => void

class Store {
    private value = 0
    private listeners = new Set<Listener>()

    getSnapshot() {
        return this.value
    }

    subscribe(listener: Listener) {
        this.listeners.add(listener)
        return () => this.listeners.delete(listener)
    }

    set(value: number) {
        this.value = value
        this.listeners.forEach(l => l())
    }
}

export const store = new Store()
