
import React from 'react'

function VerySlowList({ items }: { items: string[] }) {
    const start = performance.now()

    // JS BLOBKER NOT REact rendering phase
    // while (performance.now() - start < 2000) {
    //     // ⚠️ ВАЖНО:
    //     // мы НЕ делаем вычисления
    //     // мы просто удерживаем render
    //     // это имитация тяжёлого render-пайплайна
    // }

    return (
        <ul>
        {items.map(i => (
            <li key={i}>{i}</li>
        ))}
        </ul>
    )
}

export function WithoutTransition() {
    const [query, setQuery] = React.useState('')
    const [list, setList] = React.useState<string[]>([])

    const items = React.useMemo(
        () => Array.from({ length: 9_000_0 }, (_, i) => `Item ${i}`),
        []
    )

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setQuery(value)
        setList(items.filter(i => i.includes(value)))
    }

    return (
        <>
        <h3>❌ Without transition</h3>
        <input value={query} onChange={onChange} />
        <VerySlowList items={list} />
        </>
    )
}


export function WithTransition() {
    const [query, setQuery] = React.useState('')
    const [list, setList] = React.useState<string[]>([])
    const [isPending, startTransition] = React.useTransition()

    const items = React.useMemo(
        () => Array.from({ length: 9_000_0 }, (_, i) => `Item ${i}`),
        []
    )

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value

        // ✅ срочное
        setQuery(value)

        // ❄️ несрочное
        startTransition(() => {
            setList(items.filter(i => i.includes(value)))
        })
    }

    return (
        <>
            <h3>✅ With transition</h3>
            <input value={query} onChange={onChange} />

            {isPending && <p>Rendering list…</p>}

            <VerySlowList items={list} />
        </>
    )
}
