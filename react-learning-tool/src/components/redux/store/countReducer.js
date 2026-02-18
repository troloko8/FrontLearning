
const defaultState = {
    count: 0
}

export const countReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INCREMENT':
        return { ...state, count: state.count + action.payload }
        case 'DECREMENT':
        return { ...state, count: state.count - action.payload }
        default:
        return state
    }
}