import exp from "constants"

const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_CUSTOMER':
        return { ...state, customers: [...state.customers, action.payload] }
        case 'REMOVE_CUSTOMER':
        return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
        default:
        return state
    }
}

export const addCustomerAction = (name, payload) => {
    return {
        type: 'ADD_CUSTOMER',
        payload
    }
}

export const removeCustomerAction = (id) => {
    return {
        type: 'REMOVE_CUSTOMER',
        payload: id
    }
}