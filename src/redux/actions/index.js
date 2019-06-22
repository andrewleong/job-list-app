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

export const actionGetJobList = (keywords) => {
    return async dispatch => {
        // dispatch(startLoading());
        try {
            const { data } = await getJobList(keywords);
            console.log("data", data)
        } catch (e){
            // dispatch(loginUserError(e))
        } finally {
            // dispatch(stopLoading());
        }
    }
}
