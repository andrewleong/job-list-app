import React from 'react';

import './JobItem.css'

const JobItem = ({ job }) => {
    const {
        job_title,
        degree,
        job_country,
        job_type,
        job_location,
        salary_range_from,
        salary_range_to,
        company_name,
        company_location,
        xp_lvl,
    } = job;

    const reformatSalary = (salary) => {
        const result = Math.abs(salary) > 999 ?
            Math.sign(salary)*((Math.abs(salary)/1000).toFixed(1)) + 'k'
            : Math.sign(salary)*Math.abs(salary)
        return result;
    }

    return (
        <div className="job-item-wrapper">
            <h4>{job_title}</h4>
            <div>${reformatSalary(salary_range_from)} - ${reformatSalary(salary_range_to)}</div>
            <div>
                <span>{job_location}</span>
                <span>{xp_lvl}</span>
                <span>{degree}</span>
                <span>{job_type}</span>
            </div>
            <div>
                <div>{company_name}</div>
                <div>{company_location}</div>
            </div>
        </div>
    );
};

export default JobItem;
