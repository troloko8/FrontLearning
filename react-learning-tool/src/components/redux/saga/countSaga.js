import { put, takeEvery } from 'redux-saga/effects';
import { decrementCustomAction, incrementCustomAction } from '../store/countReducer';


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function* incrementWorker() {
    yield delay(1000);
    yield put(incrementCustomAction(1));
}

function* decrementWorker() {
    yield delay(1000);
    yield put(decrementCustomAction(1));
}
function* countWatcher() {
    yield takeEvery('ASYNC_INCREMENT', incrementWorker);
    yield takeEvery('ASYNC_DECREMENT', decrementWorker);
}

export default countWatcher;