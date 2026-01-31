import { wrapPromise, Resource } from './wrapPromise'
import { fetchUser, User } from './fakeAPI'

export const userResource: Resource<User> = wrapPromise(fetchUser(2000))