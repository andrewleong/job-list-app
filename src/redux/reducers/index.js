import {
    SET_KEYWORDS,
    SET_JOB_LIST,
    SET_TOTAL_JOBS,
    SET_LOADING,
} from '../actions';

const INITIAL_STATE = {
    keywords: '',
    jobs: [],
    page: 1,
    totalJobs: 0,
    isLoading: false,
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
        case SET_LOADING: {
            const { isLoading } = action;
            return {
                ...state,
                isLoading
            }
        }
        default:
            return state;
    }
}
