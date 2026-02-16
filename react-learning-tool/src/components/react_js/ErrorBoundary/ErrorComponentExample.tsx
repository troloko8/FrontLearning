import React, { JSX } from 'react'
import { ErrorBoundary } from './ErrorBoundary'

function Buggy(): JSX.Element {
    throw new Error('Boom')
}

export default function ErrorComponentExample(): JSX.Element {
    return (
        <ErrorBoundary>
            <Buggy />
        </ErrorBoundary>
    )
}
