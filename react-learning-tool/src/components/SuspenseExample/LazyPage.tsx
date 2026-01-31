import React, { JSX } from 'react'

export default function LazyPage(): JSX.Element {
    return (
        <div style={{ padding: 16 }}>
            <h2>LazyPage загружен 🎉</h2>
            <p>Этот компонент был подгружен через React.lazy + Suspense</p>
        </div>
    )
}
