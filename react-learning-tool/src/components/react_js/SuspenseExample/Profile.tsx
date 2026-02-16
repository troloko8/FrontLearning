import React, { JSX, useMemo } from 'react'
import { userResource } from './resource'

export default function Profile(): JSX.Element {
    const user = userResource.read()

    console.log("RERE")
    return (
        <div style={{ padding: 16 }}>
            <h2>Профиль</h2>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
        </div>
    )
}