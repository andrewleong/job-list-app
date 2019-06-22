import React from 'react';
import { connect } from 'react-redux';
import { setKeywords } from '../../redux/actions/';

import SearchBar from './SearchBar';

class SearchBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleInputChange = ({ target }) => {
        const { value } = target;
        const { onSetKeywords } = this.props;
        onSetKeywords(value);
    }

    render() {
        return (
            <SearchBar
                onInputChange={this.handleInputChange}
            />
        );
    }
}

const mapDispachToProps = dispatch => ({
    onSetKeywords: value => dispatch(setKeywords(value))
});


export default connect(null, mapDispachToProps)(SearchBarContainer);
