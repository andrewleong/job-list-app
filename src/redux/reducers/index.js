import {
    SET_KEYWORDS,
    SET_JOB_LIST,
    SET_TOTAL_JOBS,
} from '../actions';

const INITIAL_STATE = {
    keywords: '',
    jobs: [],
    page: 1,
    totalJobs: 0,

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
        case SET_TOTAL_JOBS: {
            const { totalJobs } = action;
            return {
                ...state,
                totalJobs
            }
        }
        default:
            return state;
    }
}
