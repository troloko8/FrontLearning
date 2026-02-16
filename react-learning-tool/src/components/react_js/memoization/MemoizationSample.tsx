import React, { useState } from 'react'

// Твоя функция memoize
function memoize(fn: Function) {
    const cache = new Map()

    return function (...args: any[]) {
        const key = JSON.stringify(args)

        if (cache.has(key)) {
            console.log('👉 From cache')
            return cache.get(key)
        }

        const result = fn(...args)
        cache.set(key, result)
        return result
    }
}

// Тяжёлая функция
function expensive(n: number) {
    console.log('💥 Expensive calculation...')
    return n * 2
}

const memoExpensive = memoize(expensive)

export default function MemoizationSample() {
    const [value, setValue] = useState(1)
    const [input, setInput] = useState('')

    const result = memoExpensive(value)

    return (
        <div style={{ padding: 20 }}>
            <h2>Мемоизация в действии</h2>

            <button onClick={() => setValue(prev => prev + 1)}>
                Увеличить: {value}
            </button>

            <p>Результат expensive(): {result}</p>

            <hr />

            <input
                placeholder="Введи что-нибудь"
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <p>Ненужный ререндер: {input}</p>
        </div>
    )
}
