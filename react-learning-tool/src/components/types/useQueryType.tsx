import React from "react"

// useQuery<TQueryFnData, TError, TData, TQueryKey>()

// BAD
// useQuery<User[]>({
//     queryKey: ['users'],
//     queryFn: async () => {
//         const res = await fetch('/api/users')
//         return res.json()
//     }
// })

// GOOD
// type User = {
//     id: string
//     name: string
// }

// const fetchUsers = async (): Promise<User[]> => {
//     const res = await fetch('/api/users')

//     if (!res.ok) {
//         throw new Error('Failed to fetch')
//     }

//     return res.json()
// }

// const { data, isLoading, error } = useQuery({
//     queryKey: ['users'],
//     queryFn: fetchUsers
// })
