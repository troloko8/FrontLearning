import React from "react"
import { StateType } from "./ReducerForm"

type InputProps = {
    label: string
    value: string
    field: keyof StateType
    onChange: (field: keyof StateType, value: string) => void
}

export const TextInput = React.memo(function TextInput({
    label,
    value,
    field,
    onChange,
}: InputProps) {
    console.log('render:', label)

    return (
        <label style={{ display: 'block', marginBottom: 8 }}>
        {label}:{' '}
        <input
            value={value}
            onChange={e => onChange(field, e.target.value)}
        />
        </label>
    )
})
