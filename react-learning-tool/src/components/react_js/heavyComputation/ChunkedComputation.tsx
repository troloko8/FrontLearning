import React, { useMemo, useState } from 'react'

type ChunkProcessor<T, R> = (
    chunk: T[],
    acc: R[]
) => R[]


function processInChunks<T, R>(
    items: T[],
    chunkSize: number,
    processChunk: ChunkProcessor<T, R>,
    onDone: (result: R[]) => void
) {
    let index = 0
    let result: R[] = []

    function run() {
        const chunk = items.slice(index, index + chunkSize)
        result = processChunk(chunk, result)
        index += chunkSize

        if (index < items.length) {
            setTimeout(run, 0) // 👈 отдаём управление браузеру
        } else {
            onDone(result)
        }
    }

    run()
}

// const bigArray = Array.from({ length: 500_000 }, (_, i) => i)

export function ChunkedComputation() {
    const [result, setResult] = useState<number[]>([])
    const [loading, setLoading] = useState(false)

    const bigArray: number[] = useMemo(() => {
        // return Array.from({ length: 500_000 }, (_, i) => i)
        return Array.from({ length: 500_0 }, (_, i) => i)
    }, [])

    function start() {
        setLoading(true)

        processInChunks(
            bigArray,
            500, // 👈 размер чанка
            // 100_00, // 👈 размер чанка
            (chunk, acc) => {
                const processed = chunk.map(x => {

                    const start = performance.now()

                    while (performance.now() - start < 2) {}

                    return x * 2
                })

                return acc.concat(processed)
            },
            (finalResult: number[]) => {
                setResult(finalResult)
                setLoading(false)
            }
        )
    }

    return (
        <div>
            <button onClick={start} disabled={loading}>
                {loading ? 'Processing...' : 'Start heavy computation'}
            </button>

            <p>Result size: {result.length}</p>
        </div>
    )
}
