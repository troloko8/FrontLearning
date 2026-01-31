import React, { JSX, Suspense } from 'react'

function delay<T>(ms: number, fn: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fn().then(resolve).catch(reject)
        }, ms)
    })
}

const LazyView = React.lazy(() =>
    delay(2000, () => import('./LazyPage'))
)

export default function SuspenseExample(): JSX.Element {
    return (
        <div style={{ padding: 16 }}>
            <h1>Lazy + Suspense (delay 2s)</h1>

            <Suspense fallback={<div>Загрузка LazyView (2 секунды)...</div>}>
                <LazyView />
            </Suspense>
        </div>
    )
}
