const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_MANY_CUSTOMERS':
        return { ...state, customers: [...state.customers, ...action.payload] }
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

export const addManyCustomersAction = (payload) => {
    return {
        type: 'ADD_MANY_CUSTOMERS',
        payload
    }
}

export const sagaFetchUsers = (payload) => {
    return {
        type: 'SAGA_FETCH_USERS'
    }
}