import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../App.css';

import Header from '../components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-Wrapper">
                    <Header />
                    <div style={{padding: '10px 20px'}}>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
