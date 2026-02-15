function print(value: string | number) {
    if (typeof value === 'string') {
        // здесь value: string
        console.log(value.toUpperCase())
    } else {
        // здесь value: number
        console.log(value.toFixed(2))
    }
}

// //////////////////////////////////////////////
// (custom) type guard
export type User = {
    name: string
}

export type Admin = {
    name: string
    permissions: string[]
}

function isAdmin(user: User | Admin): user is Admin {
    return 'permissions' in user
}

function handle(user: User | Admin) {
    if (isAdmin(user)) {
        // user: Admin
        console.log(user.permissions)
    } else {
        // user: User
        console.log(user.name)
    }
}

