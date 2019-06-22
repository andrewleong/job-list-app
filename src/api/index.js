import axios from 'axios';

const API_SITE = process.env.REACT_APP_API_SITE;

export const getJobList = async (keywords='') => {
    const url = `${API_SITE}search/job_filter?size=12&query=${keywords}`;

    let data;

    try {
        ({ data } = await axios.get(url))
    } catch (error) {
        const {response={}} = error;
        return response.statusText;
    }

    return data;
}
