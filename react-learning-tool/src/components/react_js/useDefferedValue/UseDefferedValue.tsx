import { useDeferredValue, useMemo, useState } from 'react'

const items = Array.from({ length: 20_000 }, (_, i) => ({
    id: i,
    title: `Item number ${i}`,
    description: `Some long description for item ${i}`,
}))

function heavyFilter(
    items: { id: number; title: string; description: string }[],
    query: string
) {
        const start = performance.now()

        // 🔥 искусственная нагрузка ~200–400ms
        while (performance.now() - start < 300) {
            // блокируем main thread
        }

        if (!query) return items

        const lower = query.toLowerCase()

        return items.filter(item =>
            item.title.toLowerCase().includes(lower) ||
            item.description.toLowerCase().includes(lower)
    )
}

export function UsualSearch() {
    const [query, setQuery] = useState('')

    const filtered = heavyFilter(items, query) // ❌ тяжело каждый символ

    return (
        <>
        <input
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
        <List items={filtered} />
        </>
    )
}


export function UseDefferedValueSearch() {
    const [query, setQuery] = useState('')
    const deferredQuery = useDeferredValue(query)

    const filtered = useMemo(
        () => heavyFilter(items, deferredQuery),
        [deferredQuery]
    )

    return (
        <>
        <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search..."
        />

        {query !== deferredQuery && <p>Searching…</p>}

        <List items={filtered} />
        </>
    )
}

function List({
    items,
}: {items: { id: number; title: string; description: string }[]}) {
    return (
        <ul>
        {items.map(item => (
            <li key={item.id} style={{ padding: 8 }}>
            <strong>{item.title}</strong>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
                {item.description}
            </div>
            </li>
        ))}
        </ul>
    )
}

