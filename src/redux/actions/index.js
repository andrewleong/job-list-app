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

export const SET_TOTAL_JOBS = 'SET_TOTAL_JOBS';

export const setTotalJobs = (totalJobs) => {
    return {
        type: SET_TOTAL_JOBS,
        totalJobs
    }
};

export const actionGetJobList = (keywords) => {
    return async dispatch => {
        // dispatch(startLoading());
        try {
            const { data } = await getJobList(keywords);
            const {
                jobs,
                total_num,
            } = data;

            dispatch(setJobList(jobs));
            dispatch(setTotalJobs(total_num))
        } catch (e){
            // dispatch(loginUserError(e))
        } finally {
            // dispatch(stopLoading());
        }
    }
}
