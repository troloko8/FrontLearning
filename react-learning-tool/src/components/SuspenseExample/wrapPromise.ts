export type Resource<T> = {
    read: () => T
}

export function wrapPromise<T>(promise: Promise<T>): Resource<T> {
    console.log("READ")

    let status: 'pending' | 'success' | 'error' = 'pending'
    let result: T

    const suspender = promise.then(
        (r) => {
            status = 'success'
            result = r
        },
        (e) => {
            status = 'error'
            result = e
        }
    )

    return {
        read() {
            if (status === 'pending') throw suspender
            if (status === 'error') throw result
            return result
        }
    }
}