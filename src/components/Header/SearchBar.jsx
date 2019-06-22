import React from 'react';

const SearchBar = ({ onInputChange }) => {
    return (
        <div>
            <input
                type='text'
                onChange={onInputChange}
            />
        </div>
    );
};

export default SearchBar;
