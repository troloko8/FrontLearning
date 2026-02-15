// never — это тип, который означает невозможное значение.

export function throwError(message: string): never {
    throw new Error(message)
}

function infiniteLoop(): never {
    while (true) {}
}


type Status = 'loading' | 'success' | 'error'

function handleStatus(status: Status): string | never {
    switch (status) {
        case 'loading':
            return 'Loading...'
        case 'success':
            return 'Done!'
        case 'error':
            return 'Oops!'
        default:
            const _exhaustiveCheck: never = status
            return _exhaustiveCheck
    }
}

// Это массив, в который ничего нельзя положить.
const arr: never[] = []

// arr.push(1) - error

