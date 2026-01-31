import React, { JSX, Suspense } from 'react'
import Profile from './Profile'


export default function CustomSuspenseExample(): JSX.Element {

    return (
        <div>
           <h1>Suspense custom resource</h1>

            <Suspense fallback={<div>Загрузка профиля (2s)...</div>}>
                <Profile />
            </Suspense>
        </div>
    )
}