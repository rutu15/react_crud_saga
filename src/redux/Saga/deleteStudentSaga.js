import {all, put, takeEvery} from 'redux-saga/effects';
import {fetchStudent} from "../Actions/index";
import API from "../../Services/api";
import {DELETE_STUDENTS} from "../Actions/types";

function* deleteStudent(payload) {
    try {
         yield API('delete', 'students', null, payload.payload);
        yield put(fetchStudent());
    } catch (error) {
        console.log("error")
    }
}

export function* watchdeleteStudentApi() {
    yield takeEvery(DELETE_STUDENTS, deleteStudent)
}

export default function* rootSaga() {
    yield all([
        watchdeleteStudentApi()
    ]);
}