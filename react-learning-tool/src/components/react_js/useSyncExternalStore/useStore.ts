// useStore.ts
import { useSyncExternalStore } from 'react'
import { store } from './store'

export function useStore() {
    return useSyncExternalStore(
        store.subscribe.bind(store),
        store.getSnapshot.bind(store)
    )
}
