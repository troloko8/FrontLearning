export type User = {
    id: number
    name: string
}

export function fetchUser(delayMs = 2000): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Nafty'
            })
        }, delayMs)
    })
}