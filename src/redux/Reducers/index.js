import {combineReducers} from "redux";
import GetUserReducer from "./getStudentsReducer";
import deleteStudentReducer from "./deleteStudentReducer";
import CreateUserReducer from "./createStudentReducer"

const reducers = combineReducers({
    GetUserReducer,
    deleteStudentReducer,
    CreateUserReducer
});

export default reducers;