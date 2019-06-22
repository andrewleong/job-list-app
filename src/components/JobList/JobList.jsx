import React from 'react';

import JobItem from '../JobItem';

const JobList = ({ jobs, totalJobs }) => {
    const getJobItem = (jobs) => jobs.map((job, index) => {
        return <JobItem key={index} job={job} />
    });
    return (
        <div>
            <h4>{totalJobs} jobs found</h4>
            {getJobItem(jobs)}
        </div>
    );
};

export default JobList;
