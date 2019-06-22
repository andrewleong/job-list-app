import React from 'react';

import { MdLocationOn } from 'react-icons/md';
import { FaBriefcase, FaGraduationCap, FaClock } from 'react-icons/fa';
import './JobItem.css'

const JobItem = ({ job }) => {
    const {
        job_title,
        degree,
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
            <div className="top-row">
                <h4>{job_title}</h4>
                <div>${reformatSalary(salary_range_from)} - ${reformatSalary(salary_range_to)}</div>
            </div>
            <div className="middle-row">
                <span>
                    {<MdLocationOn className="icon" />}
                    {job_location}
                </span>
                <span>
                    {<FaBriefcase className="icon" />}
                    {xp_lvl}
                </span>
                <span>
                    {<FaGraduationCap className="icon" />}
                    {degree}
                </span>
                <span>{
                    <FaClock className="icon" />}
                    {job_type}
                </span>
            </div>
            <div className="bottom-row">
                <div>{company_name}</div>
                <span>{company_location}</span>
            </div>
        </div>
    );
};

export default JobItem;
