import {all, put, takeEvery} from 'redux-saga/effects';
import {fetchStudentSuccess, fetchStudentFailure} from "../Actions/index";
import API from "../../Services/api";
import {FETCH_STUDENTS} from "../Actions/types";


function* getUser() {
    try {

        const res = yield API('get', 'students');
        yield put(fetchStudentSuccess(res.data));
    } catch (error) {

        yield put(fetchStudentFailure(error));
    }
}

export function* watchUserApi() {
    yield takeEvery(FETCH_STUDENTS, getUser)
}

export default function* rootSaga() {
    yield all([
        watchUserApi()
    ]);
}