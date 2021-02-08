import {FETCH_STUDENTS, FETCH_STUDENTS_FAILURE, FETCH_STUDENTS_SUCCESSFULLY} from "./types";

export const fetchStudent = () => ({
    type: FETCH_STUDENTS
});

export const fetchStudentSuccess = (payload) => ({
    type: FETCH_STUDENTS_SUCCESSFULLY,
    payload
});

export const fetchStudentFailure = (payload) => (
    {
    type: FETCH_STUDENTS_FAILURE,
    payload
});
