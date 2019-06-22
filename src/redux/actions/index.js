import {
    getJobList
} from '../../api/';

export const SET_KEYWORDS = 'SET_KEYWORDS';

export const setKeywords = (keywords) => {
    return {
        type: SET_KEYWORDS,
        keywords
    }
};

export const SET_JOB_LIST = 'SET_JOB_LIST';

export const setJobList = (jobs) => {
    return {
        type: SET_JOB_LIST,
        jobs
    }
};

export const actionGetJobList = (keywords) => {
    return async dispatch => {
        // dispatch(startLoading());
        try {
            const { data } = await getJobList(keywords);
            const { jobs } = data;
            dispatch(setJobList(jobs))
        } catch (e){
            // dispatch(loginUserError(e))
        } finally {
            // dispatch(stopLoading());
        }
    }
}
