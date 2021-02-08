import {CREATE_STUDENT,CREATE_STUDENT_SUCCESSFULLY,CREATE_STUDENT_FAILURE} from "../Actions/types";

const INTIAL_STATE = {
    data: [],
    loading: false
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_STUDENT:
            return {...state, data:action.payload, loading: true};
        case CREATE_STUDENT_SUCCESSFULLY:
            return {...state, data: action.payload, loading: false};
        case CREATE_STUDENT_FAILURE:
            return {...state, data: action.payload, loading: false}
        default:
            return state;
    }
}
