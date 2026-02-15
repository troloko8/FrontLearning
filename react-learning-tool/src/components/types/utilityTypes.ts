// Работа с Union
// Exclude<T, U>
// Extract<T, U>
// NonNullable<T>

// // Работа с функциями
// // Parameters<T>
// // ConstructorParameters<T>
// // ReturnType<T>
// // InstanceType<T>
// // ThisParameterType<T>
// OmitThisParameter<T>

export type User = {
    id: string
    name: string
    email: string
}

const user: Partial<User> = {id: undefined, name: undefined, email: undefined}
const user2: User = {id: '', name: '', email: ''}


type ReqUser = Required<Partial<User>>

// const reqUser : ReqUser = {...user}
const reqUser2 : ReqUser = {...user2}

type User2 = {
    id: Readonly<string>
    name: string
    email: string
}

const reqdUser: User2 = {...user2}

reqdUser.id = '32'


///

// Выбирает конкретные поля из типа.
// Pick<T, K>

type UserPick = {
    id: string
    name: string
    email: string
    password: string
}

type PublicUser = Pick<User, 'id' | 'name'>

const pubUser: PublicUser = {
    id: '', 
    name: '', 
    // email: '' - an error
}


// Удаляет поля из типа.
// Omit<T, K>

type ButtonProps = {
    id: string
    onClick: () => void
    children: number
}

type ButtonWithoutChildren = Omit<ButtonProps, 'children'>

const btn: ButtonWithoutChildren = {
    id: '',
    onClick: () =>{}
    // children: 0 - error
}

// Record<K, T>
// Создаёт объект с ключами K и значениями T.

type Role = 'admin' | 'user' | 'guest'

type Permissions = Record<Role, string[]>

const permissions: Permissions = {
    admin: ['read', 'write'],
    user: ['read'],
    guest: [],
    // error: []
}


// Exclude<T, U>
// Удаляет из union T все типы, которые входят в U.
// “Возьми T и выкинь из него U”

type WithoutGuest = Exclude<Role, 'guest'>
// 'admin' | 'user'

type Action =
    | { type: 'add'; payload: number }
    | { type: 'remove'; payload: number }
    | { type: 'reset' }

type WithoutReset = Exclude<Action, { type: 'reset' }>


// Extract<T, U>
// Оставляет из T только те типы, которые входят в U.

// type Action =
//     | { type: 'add'; payload: number }
//     | { type: 'remove'; payload: number }
//     | { type: 'reset' }

type AddAction = Extract<Action, { type: 'add' }>

// NonNullable<T>
// Удаляет null и undefined из типа.

type MaybeUser = {
    id: string
} | null | undefined

type UserNull = NonNullable<MaybeUser>
// { id: string }

const nullUser: UserNull = {id: ''}
// const nullUser1: UserNull = undefined - error

