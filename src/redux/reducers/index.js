import {
    SET_KEYWORDS,
    SET_JOB_LIST,
} from '../actions';

const INITIAL_STATE = {
    keywords: '',
    jobs: [],
}

export default function Reducer(state=INITIAL_STATE, action){
    switch (action.type) {
        case SET_KEYWORDS: {
            const { keywords } = action;
            return {
                ...state,
                keywords
            }
        }
        case SET_JOB_LIST: {
            const { jobs } = action;
            return {
                ...state,
                jobs
            }
        }
        default:
            return state;
    }
}
