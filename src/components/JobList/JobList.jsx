import React from 'react';

import JobItem from '../JobItem';

const JobList = ({ jobs }) => {
    const getJobItem = (jobs) => jobs.map((job, index) => {
        return <JobItem key={index} job={job} />
    });
    return (
        <div>
            <h4>XXX jobs found</h4>
            {getJobItem(jobs)}
        </div>
    );
};

export default JobList;
