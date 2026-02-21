import { createStore, combineReducers, applyMiddleware } from 'redux';
import { countReducer } from './countReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    count: countReducer,
    customers: customerReducer
})

// thunk middleware
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// saga middleware
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)

