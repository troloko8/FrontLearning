import React from 'react'

type ErrorBoundaryProps = {
    children: React.ReactNode
}

type ErrorBoundaryState = {
    hasError: boolean
    error: unknown
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: unknown): Partial<ErrorBoundaryState> {
        return { hasError: true, error }
    }

    componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
        // сюда можно отправить лог в Sentry/Datadog и т.д.
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: 16 }}>
                    <h2>Что-то пошло не так 😢</h2>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>
                        {String(this.state.error)}
                    </pre>
                </div>
            )
        }

        return this.props.children
    }
}
