import {all} from "redux-saga/effects";
import GetUserSaga from "./getStudentsSaga";
import deleteStudentSaga from "./deleteStudentSaga";
import CreateStudentSaga from "./createStudentSaga";


/* Combine all saga in root saga */
function* rootSaga() {
    yield all([
        GetUserSaga(),
        deleteStudentSaga(),
        CreateStudentSaga()
    ])
}

export default rootSaga;