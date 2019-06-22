import axios from 'axios';

const API_SITE = process.env.REACT_APP_API_SITE;
console.log("API_SITE", process.env)

export const getJobList = async (keywords) => {
    let data;
    const url = `${API_SITE}search/job_filter?size=10&query=${keywords}`

    try {
        ({ data } = await axios.get(url))
    } catch (error) {
        const {response={}} = error;
        throw response.statusText;
    }

    return data;
}
