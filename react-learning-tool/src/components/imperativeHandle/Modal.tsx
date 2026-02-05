import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState
} from "react"

type ModalHandle = {
    open: () => void
    close: () => void
    toggle: () => void
    setLoading: (v: boolean) => void
    setContent: (node: React.ReactNode) => void
}

type ModalProps = {
    title?: string
}

const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState<React.ReactNode>(null)

    const lastActionRef = useRef<string>("none")

    useImperativeHandle(ref, () => ({
        open() {
            lastActionRef.current = "open"
            setIsOpen(true)
        },
        close() {
            lastActionRef.current = "close"
            setIsOpen(false)
        },
        toggle() {
            lastActionRef.current = "toggle"
            setIsOpen(v => !v)
        },
        setLoading(v) {
            lastActionRef.current = `setLoading(${v})`
            setIsLoading(v)
        },
        setContent(node) {
            lastActionRef.current = "setContent"
            setContent(node)
        }
    }), [])

    if (!isOpen) return null

    return (
        <div style={styles.backdrop}>
            <div style={styles.modal}>
                <div style={styles.header}>
                    <h3 style={{ margin: 0 }}>{props.title ?? "Modal"}</h3>
                    <button onClick={() => setIsOpen(false)}>✖</button>
                </div>

                <div style={styles.body}>
                    {isLoading ? (
                        <div style={styles.loader}>Loading...</div>
                    ) : (
                        content ?? <div>Пусто</div>
                    )}
                </div>

                <div style={styles.footer}>
                    <small>last action: {lastActionRef.current}</small>
                </div>
            </div>
        </div>
    )
})

export default Modal

const styles: Record<string, React.CSSProperties> = {
    backdrop: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        width: 420,
        borderRadius: 12,
        background: "white",
        color: 'black',
        padding: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },
    body: {
        minHeight: 80
    },
    footer: {
        marginTop: 16,
        opacity: 0.7
    },
    loader: {
        padding: 16,
        textAlign: "center"
    }
}
