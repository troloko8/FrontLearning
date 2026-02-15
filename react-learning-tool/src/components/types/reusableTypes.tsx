// Bad example of reusable types
export type User = {
    id: string
    name: string
    email: string
}

type CreateUser = {
    name: string
    email: string
}

// Good example of reusable types

type CreateUserDto = Omit<User, 'id'>
type UpdateUserDto = Partial<CreateUserDto>


// - - - - - - -- 
// do types composition instead of duplication

// bad example 
type ProductWithDiscountAndMeta = {
    id: string
    title: string
    price: number
    discount: number
    createdAt: Date
}

// good example
type Identifiable = {
    id: string
}

type Timestamped = {
    createdAt: Date
    updatedAt: Date
}

type Discountable = {
    discount: number
}

type Product = Identifiable & Timestamped & {
    title: string
    price: number
} & Discountable

/// - - - - - --
// Discriminated unions


type LoadingState = {
    status: 'loading'
}

type SuccessState<T> = {
    status: 'success'
    data: T
}

type ErrorState = {
    status: 'error'
    error: string
}

type AsyncState<T> =
    | LoadingState
    | SuccessState<T>
    | ErrorState

// example of usage
type UsersState = AsyncState<User[]>
type ProductState = AsyncState<Product>

// - - - - - -- - - - - - --  -
// Conditional Types

type IdOf<T> = T extends { id: infer U } ? U : never
type UserId = IdOf<User> // string
type ProductId = IdOf<Product> // string


// /§/ - - - - - -- - - - - --  -
// "as const" + typeof

const ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest'
} as const

type Role = typeof ROLES[keyof typeof ROLES]
