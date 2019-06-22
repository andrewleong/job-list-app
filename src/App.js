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
        return (
            <div className="App">
                <div className="App-Wrapper">
                    <Header
                        onSubmit={this.handleSearch}
                    />
                    <JobList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ job }) => {
    const { keywords, } = job;
    return {
        keywords,
    }
}

const mapDispatchToProps = dispatch => ({
    getJobList: (keywords) => dispatch(actionGetJobList(keywords))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
