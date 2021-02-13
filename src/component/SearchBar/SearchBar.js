import React from 'react';

function SearchBar({ query, onChange }) {
    return (
        <input
            className="input"
            type="text"
            name="query"
            placeholder="search..."
            value={query}
            onChange={onChange}
        />
    );
}

export default SearchBar;
