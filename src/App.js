import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CylinderSpinLoader } from 'react-css-loaders';

import './App.css';

import Header from './components/Header';
import JobList from './components/JobList';

import {
    actionGetJobList
} from './redux/actions';

class App extends Component {
    handleSearch = () => {
        const { keywords, getJobList } = this.props;
        getJobList(keywords);
    }

    componentDidMount(){
        const { getJobList } = this.props;
        getJobList();
    }

    render() {
        const { jobs, totalJobs, isLoading } = this.props;
        return (
            <div className="app">
                <div className="app-wrapper">
                    { isLoading &&
                        <div className="loader-spinner">
                            <div className="overlay"></div>
                            <CylinderSpinLoader />
                        </div>
                    }
                    <Header
                        onSubmit={this.handleSearch}
                    />
                    <JobList
                        jobs={jobs}
                        totalJobs={totalJobs}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ job }) => {
    const { keywords, jobs, totalJobs, isLoading, } = job;
    return {
        keywords,
        jobs,
        totalJobs,
        isLoading,
    }
}

const mapDispatchToProps = dispatch => ({
    getJobList: (keywords) => dispatch(actionGetJobList(keywords))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
