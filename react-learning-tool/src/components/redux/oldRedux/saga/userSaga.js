import { call, put, takeEvery } from "redux-saga/effects"
import { addManyCustomersAction } from "../store/customerReducer"

const fetchSagaCustomers = () => fetch('https://jsonplaceholder.typicode.com/users')

function* customerWorker() {
    try {
        const response = yield call(fetchSagaCustomers)
        const json = yield call([response, response.json])
        yield put(addManyCustomersAction(json))
    } catch (error) {
        console.error('Failed to fetch users:', error)
    }
}

function* userWatcher() {
    yield takeEvery('SAGA_FETCH_USERS', customerWorker)
}

export default userWatcher;
