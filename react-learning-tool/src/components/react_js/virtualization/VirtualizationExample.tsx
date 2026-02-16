import React, { useCallback, useMemo, useRef, useState } from 'react'

type RowProps = {
    index: number
    style: React.CSSProperties
}

const Row: React.FC<RowProps> = ({ index, style }) => (
    <div style={style}>
        Элемент #{index}
    </div>
)

export default function VirtualizationExample() {
    const LIST_HEIGHT = 400
    const ITEM_COUNT = 10000
    const ITEM_SIZE = 35
    const OVERSCAN = 5

    const scrollRef = useRef<HTMLDivElement>(null)
    const rafRef = useRef<number | null>(null)
    const [range, setRange] = useState(() => {
        const visibleCount = Math.ceil(LIST_HEIGHT / ITEM_SIZE) + OVERSCAN * 2
        return { start: 0, end: Math.min(ITEM_COUNT - 1, visibleCount - 1) }
    })

    const updateRange = useCallback((scrollTop: number) => {
        const start = Math.max(0, Math.floor(scrollTop / ITEM_SIZE) - OVERSCAN)
        const visibleCount = Math.ceil(LIST_HEIGHT / ITEM_SIZE) + OVERSCAN * 2
        const end = Math.min(ITEM_COUNT - 1, start + visibleCount - 1)
        setRange(prev => (prev.start === start && prev.end === end ? prev : { start, end }))
    }, [])

    const scrollTo = (index: number) => {
        const container = scrollRef.current
        if (!container) return
        const maxScroll = ITEM_COUNT * ITEM_SIZE - LIST_HEIGHT
        const target = Math.max(
            0,
            Math.min(index * ITEM_SIZE - (LIST_HEIGHT - ITEM_SIZE) / 2, maxScroll)
        )
        container.scrollTop = target
        updateRange(target)
    }

    const onScroll = useCallback(
        (event: React.UIEvent<HTMLDivElement>) => {
            const scrollOffset = event.currentTarget.scrollTop
            if (rafRef.current !== null) return
            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null
                updateRange(scrollOffset)
                console.log('scrollOffset =>', scrollOffset)
            })
        },
        [updateRange]
    )

    const items = useMemo(() => {
        const rendered = []
        for (let i = range.start; i <= range.end; i += 1) {
            rendered.push(
                <Row
                    key={i}
                    index={i}
                    style={{
                        position: 'absolute',
                        top: i * ITEM_SIZE,
                        height: ITEM_SIZE,
                        left: 0,
                        right: 0,
                    }}
                />
            )
        }
        return rendered
    }, [range.end, range.start])

    return (
        <div style={{ padding: 20 }}>
            <button onClick={() => scrollTo(500)}>
                Перейти к элементу #500
            </button>

            <div
                ref={scrollRef}
                onScroll={onScroll}
                style={{
                    height: LIST_HEIGHT,
                    overflowY: 'auto',
                    width: '100%',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        height: ITEM_COUNT * ITEM_SIZE,
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    {items}
                </div>
            </div>
        </div>
    )
}
