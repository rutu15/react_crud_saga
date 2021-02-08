import {DELETE_STUDENTS} from "./types";

export const deleteStudent = (payload) => ({
    type: DELETE_STUDENTS,
    payload
});