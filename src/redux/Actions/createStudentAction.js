import {CREATE_STUDENT,CREATE_STUDENT_SUCCESSFULLY,CREATE_STUDENT_FAILURE} from "./types";

export const createStudent = (payload) => ({
    type: CREATE_STUDENT,
    payload
});

export const createStudentSuccess = (payload) => ({
    type: CREATE_STUDENT_SUCCESSFULLY,
    payload
});

export const createStudentFailure = (payload) => (
    {
    type: CREATE_STUDENT_FAILURE,
    payload
});
