import React from 'react';

import './SearchBar.css';

const SearchBar = ({ onInputChange }) => {
    return (
        <div>
            <input
                type='text'
                onChange={onInputChange}
                placeholder='Type here'
            />
        </div>
    );
};

export default SearchBar;
