import React from 'react';

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
