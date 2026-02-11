/* eslint-disable no-restricted-globals */

/// <reference lib="webworker" />

export type StartMessage = {
    type: 'start'
    payload: number
}

self.onmessage = (event: MessageEvent<StartMessage>) => {
    if (event.data.type !== 'start') return

    const n = event.data.payload

    // 💀 имитация тяжёлой CPU-задачи
    let result = 0
    const start = performance.now()

    while (performance.now() - start < 3000) {
        result += Math.sqrt(n) * Math.random()
    }

    self.postMessage(result)
}
