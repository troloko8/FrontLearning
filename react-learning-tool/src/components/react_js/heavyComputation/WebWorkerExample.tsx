import React, { useRef, useState, useEffect } from 'react'

export function WebWorkerExample() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState<number | null>(null)
    const [running, setRunning] = useState(false)

    const workerRef = useRef<Worker | null>(null)

    useEffect(() => {
        return () => {
            workerRef.current?.terminate()
        }
    }, [])

    function start() {
        setRunning(true)
        setResult(null)

        const worker = new Worker(
            new URL('./heavy.worker.ts', import.meta.url),
            { type: 'module' }
        )

        workerRef.current = worker

        worker.onmessage = (event: MessageEvent<number>) => {
            setResult(event.data)
            setRunning(false)
            worker.terminate()
        }

        worker.postMessage({
            type: 'start',
            payload: 42,
        })
    }

    return (
        <div>
            <button onClick={start} disabled={running}>
                {running ? 'Computing...' : 'Start heavy calculation'}
            </button>

            <input
                placeholder="Try typing while computing"
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <p>
                Result:{' '}
                {result !== null ? result.toFixed(2) : '—'}
            </p>
        </div>
    )
}
