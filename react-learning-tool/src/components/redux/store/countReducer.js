
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


export const incrementCustomAction = (count) => {
    return { type: 'INCREMENT', payload: count }
};

export const decrementCustomAction = (count) => {
    return { type: 'DECREMENT', payload: count}
};

export const asyncIncrementCreator = (count) => {
    return { type: 'ASYNC_INCREMENT', payload: count}
};

export const asyncDecrementCreator = (count) => {
    return { type: 'ASYNC_DECREMENT'}
};
