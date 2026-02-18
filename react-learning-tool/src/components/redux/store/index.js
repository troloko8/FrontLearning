import { createStore, combineReducers } from 'redux';
import { countReducer } from './countReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
    count: countReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
