import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    render() {
        const { jobs } = this.props;
        return (
            <div className="app">
                <div className="app-wrapper">
                    <Header
                        onSubmit={this.handleSearch}
                    />
                    <JobList
                        jobs={jobs}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ job }) => {
    const { keywords, jobs } = job;
    return {
        keywords,
        jobs,
    }
}

const mapDispatchToProps = dispatch => ({
    getJobList: (keywords) => dispatch(actionGetJobList(keywords))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
