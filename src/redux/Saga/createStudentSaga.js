import {all, put, takeEvery} from 'redux-saga/effects';
import {createStudentSuccess, createStudentFailure,fetchStudent} from "../Actions/index";
import API from "../../Services/api";
import {CREATE_STUDENT} from "../Actions/types";


function* createStudent(payload) {
    try {
        const res = yield API(payload.payload.Sid ? 'put':'post','students',payload.payload,payload.payload.Sid);
        yield put(createStudentSuccess(res.data));
        yield put(fetchStudent())
    } catch (error) {
        yield put(createStudentFailure(error));
    }
}

export function* watchStudentApi() {
    yield takeEvery(CREATE_STUDENT, createStudent)
}

export default function* rootSaga() {
    yield all([
        watchStudentApi()
    ]);
}