import React from "react"
import { TextInput } from "./TextInput"

export type StateType = {
    firstName: string
    lastName: string
    email: string
}

type Action =
    | { type: 'change'; field: keyof StateType; value: string }

function reducer(state: StateType, action: Action): StateType {
    switch (action.type) {
        case 'change':
        // ВАЖНО: меняем ТОЛЬКО одно поле
        return {
            ...state,
            [action.field]: action.value,
        }
        default:
        return state
    }
}

export function ReducerForm() {
    const [state, dispatch] = React.useReducer(reducer, {
        firstName: '',
        lastName: '',
        email: '',
    })

    // const handleChange = React.useCallback(
    //     (field: keyof State) => (value: string) => {
    //     dispatch({ type: 'change', field, value })
    //     },
    //     []
    // )

    const handleChange = React.useCallback(
        (field: keyof StateType, value: string) => {
            dispatch({ type: 'change', field, value })
        }, [])

    return (
        <>
            <TextInput
                label="First name"
                value={state.firstName}
                onChange={handleChange}
                field="firstName"
            />

            <TextInput
                label="Last name"
                value={state.lastName}
                onChange={handleChange}
                field="lastName"
            />

            <TextInput
                label="Email"
                value={state.email}
                onChange={handleChange}
                field="email"
            />
        </>
    )
}
